import { useDraggable } from "@dnd-kit/core";
import TaskCardMenu from "./TaskCardMenu";
import { TaskProject } from "@/types";

type TaskCardProps = {
  task: TaskProject;
  canEdit: boolean;
};

export default function TaskCard({ task, canEdit }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <li className="task-card" style={style}>
      <div
        className="task-card__content"
        {...listeners}
        {...attributes}
        ref={setNodeRef}
      >
        <h4 className="task-card__name">{task.name}</h4>
        <p className="task-card__description">{task.description}</p>
      </div>

      <TaskCardMenu task={task} canEdit={canEdit} />
    </li>
  );
}
