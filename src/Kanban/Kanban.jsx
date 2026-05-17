import { DndContext } from "@dnd-kit/core";
import { KanbanCard } from "./KanbanCard";
import { KanbanColumn } from "./KanbanColumn";
import { useState, useEffect } from "react";

const API = "http://localhost:3000/api/tasks";

export const Kanban = ({ newTask }) => {
  const [tasks, setTasks] = useState([]);

  const COLUMNS = [
    { id: "wished", title: "Wished" },
    { id: "applied", title: "Applied" },
    { id: "in-progress", title: "In progress" },
    { id: "rejected", title: "Rejected" },
    { id: "offer", title: "Offer" },
  ];

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Failed to load tasks", err));
  }, []);

  useEffect(() => {
    if (newTask) {
      setTasks((prev) => [...prev, newTask]);
    }
  }, [newTask]);

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === active.id ? { ...task, status: over.id } : task
      )
    );

    try {
      await fetch(`${API}/${active.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: over.id }),
      });
    } catch (err) {
      console.error("Failed to update task status", err);
    }
  };

  const handleDelete = async (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));

    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  return (
    <>
      <main className="kanban container">
        <h1 className="kanban_title">Status of your applications</h1>

        <div className="kanban_columns">
          <DndContext onDragEnd={handleDragEnd}>
            <div className="kanban_content">
              {COLUMNS.map((col) => (
                <KanbanColumn key={col.id} id={col.id} title={col.title}>
                  {tasks
                    .filter((task) => task.status === col.id)
                    .map((task) => (
                      <KanbanCard
                        key={task.id}
                        id={task.id}
                        position={task.position}
                        salary={task.salary}
                        company={task.company}
                        link={task.link}
                        onDelete={handleDelete}
                      />
                    ))}
                </KanbanColumn>
              ))}
            </div>
          </DndContext>
        </div>
      </main>
    </>
  );
};