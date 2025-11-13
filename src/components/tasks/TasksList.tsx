import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { toast } from "sonner";
import { Task, TaskStatus } from "@/types";
import { statusTranslations } from "@/locales/es";
import TaskCard from "./TaskCard";
import DropTask from "./DropTask";
import { updateStatus } from "@/api/TaskApi";

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
  const params = useParams();
  const projectId = params.projectId!;

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateStatus,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      toast.success(data);
    }
  });

  const groupedTasks = tasks.reduce((acc, task) => {
    let currentGroup = acc[task.status] ? [...acc[task.status]] : [];
    currentGroup = [...currentGroup, task];
    return { ...acc, [task.status]: currentGroup };
  }, initialStatusGroups);

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (over && over.id) {
      const taskId = active.id.toString();
      const status = over.id as TaskStatus;
      mutate({ projectId, taskId, status });
    }
  };

  return (
    <div className="tasks-list">
      <h2 className="tasks-list__heading">Tareas</h2>

      <div className="tasks-list__content">
        <DndContext onDragEnd={handleDragEnd}>
          {Object.entries(groupedTasks).map(([status, tasks]) => (
            <div
              key={status}
              className={`tasks-list__frame tasks-list__frame--${statusStyles[status]}`}
            >
              <h3 className="tasks-list__status-title">
                {statusTranslations[status]}
              </h3>

              <DropTask status={status} />

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
        </DndContext>
      </div>
    </div>
  );
}
