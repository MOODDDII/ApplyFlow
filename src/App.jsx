import { useState } from "react";
import { Header } from "./Header/Header";
import { Modal } from "./Modal/Modal";
import { Kanban } from "./Kanban/Kanban";

export const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [newTask, setNewTask] = useState(null);

  const handleTaskAdded = (task) => {
    setNewTask(task);
  };

  return (
    <>
      <Header openModal={() => setOpenModal(true)} />

      {openModal && (
        <Modal
          onClose={() => setOpenModal(false)}
          onTaskAdded={handleTaskAdded}
        />
      )}

      <Kanban newTask={newTask} />
    </>
  );
};
