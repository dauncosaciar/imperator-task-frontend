import { Task } from "@/types";
import TaskCardMenu from "./TaskCardMenu";

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

      <TaskCardMenu />
    </li>
  );
}
