import { Task } from "@/types";

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <li className="task-card">
      <p>{task.name}</p>
    </li>
  );
}
