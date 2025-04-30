import { Dialog, Portal } from "@chakra-ui/react";
import { X } from "lucide-react";

export default function AddTaskModal() {
  return (
    <Dialog.Root
      lazyMount
      size="lg"
      placement="center"
      open={true}
      onOpenChange={() => {}}
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
