import { useNavigate } from "react-router-dom";
import { Dialog, Portal } from "@chakra-ui/react";
import { X } from "lucide-react";

export default function EditTaskModal() {
  const navigate = useNavigate();

  return (
    <Dialog.Root
      lazyMount
      size="lg"
      placement="center"
      open={true}
      onOpenChange={() => navigate(location.pathname, { replace: true })}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content className="edit-task-modal">
            <Dialog.Title className="edit-task-modal__heading">
              Editar la tarea
            </Dialog.Title>

            <p className="edit-task-modal__text">
              Edita esta tarea y guarda sus cambios.
            </p>

            <Dialog.CloseTrigger asChild>
              <button type="button">
                <X />
              </button>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
