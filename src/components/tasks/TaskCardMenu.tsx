import { useNavigate, useParams } from "react-router-dom";
import { EllipsisVertical } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Menu, Portal } from "@chakra-ui/react";
import { toast } from "sonner";
import { TaskProject } from "@/types";
import { deleteTask } from "@/api/TaskApi";

type TaskCardMenuProps = {
  task: TaskProject;
  canEdit: boolean;
};

export default function TaskCardMenu({ task, canEdit }: TaskCardMenuProps) {
  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.projectId!;

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteTask,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      toast.success(data);
    }
  });

  return (
    <Menu.Root positioning={{ placement: "bottom-end" }}>
      <Menu.Trigger asChild>
        <div className="task-card-avatar">
          <EllipsisVertical />
        </div>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner className="task-card-menu">
          <Menu.Content className="task-card-menu__content">
            <Menu.Item className="task-card-menu__item" value="Ver Tarea">
              <button
                type="button"
                className="task-card-menu__button"
                onClick={() =>
                  navigate(location.pathname + `?viewTask=${task._id}`)
                }
              >
                Ver Tarea
              </button>
            </Menu.Item>

            {canEdit && (
              <>
                <Menu.Item
                  className="task-card-menu__item"
                  value="Editar Tarea"
                >
                  <button
                    type="button"
                    className="task-card-menu__button"
                    onClick={() =>
                      navigate(location.pathname + `?editTask=${task._id}`)
                    }
                  >
                    Editar Tarea
                  </button>
                </Menu.Item>

                <Menu.Item
                  className="task-card-menu__item"
                  value="Eliminar Tarea"
                >
                  <button
                    type="button"
                    className="task-card-menu__button task-card-menu__button--delete"
                    onClick={() => mutate({ projectId, taskId: task._id })}
                  >
                    Eliminar Tarea
                  </button>
                </Menu.Item>
              </>
            )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
