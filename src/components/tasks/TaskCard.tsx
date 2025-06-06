import TaskCardMenu from "./TaskCardMenu";
import { Task } from "@/types";

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <li className="task-card">
      <div className="task-card__content">
        <h4 className="task-card__name">{task.name}</h4>
        <p className="task-card__description">{task.description}</p>
      </div>

      <TaskCardMenu task={task} />
    </li>
  );
}
