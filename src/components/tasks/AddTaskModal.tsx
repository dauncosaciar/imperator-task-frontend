import { useLocation, useNavigate } from "react-router-dom";
import { Dialog, Portal } from "@chakra-ui/react";
import { X } from "lucide-react";

export default function AddTaskModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modalTask = queryParams.get("newTask");
  const open = modalTask ? true : false;

  return (
    <Dialog.Root
      lazyMount
      size="lg"
      placement="center"
      open={open}
      onOpenChange={() => navigate(location.pathname, { replace: true })}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content className="add-task-modal">
            <Dialog.Title className="add-task-modal__heading">
              Nueva Tarea
            </Dialog.Title>

            <p className="add-task-modal__text">
              Completa el formulario y crea una nueva.
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
