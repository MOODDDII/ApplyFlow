import { Router } from "express";
import { pool } from "../db.js";

export const tasksRouter = Router();

// GET
tasksRouter.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM tasks ORDER BY created_at ASC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// POST
tasksRouter.post("/", async (req, res) => {
  const { company, position, link, salary } = req.body;

  if (!company || !position || !link) {
    return res.status(400).json({ error: "company, position and link are required" });
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO tasks (company, position, link, salary)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [company, position, link, salary || null]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create task" });
  }
});

// PATCH
tasksRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const VALID_STATUSES = ["wished", "applied", "in-progress", "rejected", "offer"];

  if (!status || !VALID_STATUSES.includes(status)) {
    return res.status(400).json({ error: `status must be one of: ${VALID_STATUSES.join(", ")}` });
  }

  try {
    const { rows } = await pool.query(
      `UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *`,
      [status, id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update task" });
  }
});

// DELETE
tasksRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await pool.query(
      "DELETE FROM tasks WHERE id = $1 RETURNING id",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ deleted: rows[0].id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete task" });
  }
});
