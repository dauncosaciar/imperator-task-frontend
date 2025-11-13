import { useDraggable } from "@dnd-kit/core";
import TaskCardMenu from "./TaskCardMenu";
import { Task } from "@/types";

type TaskCardProps = {
  task: Task;
  canEdit: boolean;
};

export default function TaskCard({ task, canEdit }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id
  });

  const style = transform ? {} : undefined;

  return (
    <li className="task-card">
      <div
        className="task-card__content"
        {...listeners}
        {...attributes}
        ref={setNodeRef}
        style={style}
      >
        <h4 className="task-card__name">{task.name}</h4>
        <p className="task-card__description">{task.description}</p>
      </div>

      <TaskCardMenu task={task} canEdit={canEdit} />
    </li>
  );
}
