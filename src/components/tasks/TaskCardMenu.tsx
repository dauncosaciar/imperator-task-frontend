import { useNavigate } from "react-router-dom";
import { EllipsisVertical } from "lucide-react";
import { Menu, Portal } from "@chakra-ui/react";
import { Task } from "@/types";

type TaskCardMenuProps = {
  task: Task;
};

export default function TaskCardMenu({ task }: TaskCardMenuProps) {
  const navigate = useNavigate();

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
              <button type="button" className="task-card-menu__button">
                Ver Tarea
              </button>
            </Menu.Item>

            <Menu.Item className="task-card-menu__item" value="Editar Tarea">
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

            <Menu.Item className="task-card-menu__item" value="Eliminar Tarea">
              <button
                type="button"
                className="task-card-menu__button task-card-menu__button--delete"
              >
                Eliminar Tarea
              </button>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
