import { Button } from "../Button/Button";
import { useState } from "react";

const API = "http://localhost:3000/api/tasks";

export const Modal = ({ onClose, onTaskAdded }) => {
  const [form, setForm] = useState({
    company: "",
    position: "",
    link: "",
    salary: "",
  });

  const [errs, setErrs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const validationErrs = {};

    if (!form.company.trim() || form.company.length < 3) {
      validationErrs.company = "Enter right company";
    }

    if (!form.position.trim() || form.position.length < 3) {
      validationErrs.position = "Enter right position";
    }

    if (!form.link.trim() || (!form.link.startsWith("https://") && !form.link.startsWith("http://"))) {
      validationErrs.link = "Enter right link";
    }

    if (!form.salary.trim() || Number.isNaN(Number(form.salary))) {
      validationErrs.salary = "Enter right salary";
    }

    setErrs(validationErrs);

    return Object.keys(validationErrs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const newTask = await res.json();

      onTaskAdded(newTask); // передати новий таск в Kanban
      onClose();
    } catch (err) {
      console.error("Failed to add task", err);
    }
  };

  return (
    <>
      <div className="modal_overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <h2 className="modal_title">Enter info</h2>

          <form className="modal_form" onSubmit={handleSubmit}>
            <div className="modal_field">
              <p className="modal_err">{errs.company || ""}</p>
              <input
                name="company"
                value={form.company}
                className="modal_input"
                type="text"
                placeholder="Company"
                onChange={handleChange}
              />
            </div>

            <div className="modal_field">
              <p className="modal_err">{errs.position || ""}</p>
              <input
                name="position"
                value={form.position}
                className="modal_input"
                type="text"
                placeholder="Position"
                onChange={handleChange}
              />
            </div>

            <div className="modal_field">
              <p className="modal_err">{errs.link || ""}</p>
              <input
                name="link"
                value={form.link}
                className="modal_input"
                type="text"
                placeholder="Link"
                onChange={handleChange}
              />
            </div>

            <div className="modal_field">
              <p className="modal_err">{errs.salary || ""}</p>
              <input
                name="salary"
                value={form.salary}
                className="modal_input"
                type="text"
                placeholder="Salary"
                onChange={handleChange}
              />
            </div>

            <div className="modal_btns">
              <Button variant="secondary" text="Close" onClick={onClose} type="button" />
              <Button text="Add" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};