import { useDroppable } from "@dnd-kit/core";

export const KanbanColumn = ({ children, id, title }) => {
  const { setNodeRef } = useDroppable({ id: id });

  return (
    <>
      <div className="kanban_column">
        <h3 className="kanban_column_title">{title}</h3>
        <div className="kanban_column_children" ref={setNodeRef}>
          {children}

          {children.length === 0 && <p className="kanban_column_sleep">🤷‍♂️</p>}
        </div>
      </div>
    </>
  );
};
