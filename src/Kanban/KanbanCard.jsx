import { useDraggable } from "@dnd-kit/core";
import { Button } from "../Button/Button";

export const KanbanCard = ({ id, position, link, salary, company, onDelete }) => {
  const { setNodeRef, transform, listeners, attributes } = useDraggable({
    id: id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <article
      className="kanban_card"
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <div {...listeners} style={{ cursor: "grab" }}>
        <h4 className="kanban_card_title">{company}</h4>
        <p className="kanban_card_position">{position}</p>
        <p className="kanban_card_salary">{salary}</p>
      </div>

      <div className="kanban_btns">
        <Button
          variant="secondary"
          text="🗙"
          onClick={() => onDelete(id)}
        />
        <a href={link} target="_blank" rel="noreferrer">
          <Button variant="primary" text="Link" />
        </a>
      </div>
    </article>
  );
};