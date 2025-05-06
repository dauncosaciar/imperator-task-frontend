import { EllipsisVertical } from "lucide-react";
import { Menu, Portal } from "@chakra-ui/react";

export default function TaskCardMenu() {
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
            <button type="button" className="task-card-menu__button">
              Ver Tarea
            </button>
            <button type="button" className="task-card-menu__button">
              Editar Tarea
            </button>
            <button
              type="button"
              className="task-card-menu__button task-card-menu__button--delete"
            >
              Eliminar Tarea
            </button>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
