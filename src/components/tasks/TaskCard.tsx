import TaskCardMenu from "./TaskCardMenu";
import { Task } from "@/types";

type TaskCardProps = {
  task: Task;
  canEdit: boolean;
};

export default function TaskCard({ task, canEdit }: TaskCardProps) {
  return (
    <li className="task-card">
      <div className="task-card__content">
        <h4 className="task-card__name">{task.name}</h4>
        <p className="task-card__description">{task.description}</p>
      </div>

      <TaskCardMenu task={task} canEdit={canEdit} />
    </li>
  );
}
