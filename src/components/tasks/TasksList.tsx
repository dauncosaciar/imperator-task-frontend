import { Task } from "@/types";
import TaskCard from "./TaskCard";

type TasksListProps = {
  tasks: Task[];
};

type GroupedTasks = {
  [key: string]: Task[];
};

const initialStatusGroups: GroupedTasks = {
  pending: [],
  onHold: [],
  inProgress: [],
  underReview: [],
  completed: []
};

export default function TasksList({ tasks }: TasksListProps) {
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
          <div key={status} className="tasks-list__frame">
            <ul className="tasks-list__list">
              {tasks.length === 0 ? (
                <li className="tasks-list__item">Sin Tareas</li>
              ) : (
                tasks.map(task => <TaskCard key={task._id} task={task} />)
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
