import { Task } from "@/types";
import { statusTranslations } from "@/locales/es";
import TaskCard from "./TaskCard";

type TasksListProps = {
  tasks: Task[];
  canEdit: boolean;
};

type GroupedTasks = {
  [key: string]: Task[];
};

type StatusStyles = {
  [key: string]: string;
};

const initialStatusGroups: GroupedTasks = {
  pending: [],
  onHold: [],
  inProgress: [],
  underReview: [],
  completed: []
};

const statusStyles: StatusStyles = {
  pending: "pending",
  onHold: "on-hold",
  inProgress: "in-progress",
  underReview: "under-review",
  completed: "completed"
};

export default function TasksList({ tasks, canEdit }: TasksListProps) {
  const groupedTasks = tasks.reduce((acc, task) => {
    let currentGroup = acc[task.status] ? [...acc[task.status]] : [];
    currentGroup = [...currentGroup, task];
    return { ...acc, [task.status]: currentGroup };
  }, initialStatusGroups);

  return (
    <div className="tasks-list">
      <h2 className="tasks-list__heading">Tareas</h2>

      <div className="tasks-list__content">
        {Object.entries(groupedTasks).map(([status, tasks]) => (
          <div
            key={status}
            className={`tasks-list__frame tasks-list__frame--${statusStyles[status]}`}
          >
            <h3 className="tasks-list__status-title">
              {statusTranslations[status]}
            </h3>
            <ul className="tasks-list__list">
              {tasks.length === 0 ? (
                <li className="tasks-list__item">Sin Tareas</li>
              ) : (
                tasks.map(task => (
                  <TaskCard key={task._id} task={task} canEdit={canEdit} />
                ))
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
