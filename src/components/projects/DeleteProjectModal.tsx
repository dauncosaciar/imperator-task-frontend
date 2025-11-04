import { useLocation, useNavigate } from "react-router-dom";
import { Dialog, Portal } from "@chakra-ui/react";
import { X } from "lucide-react";

export default function DeleteProjectModal() {
  const navigate = useNavigate();

  // Read if modal exists
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const deleteProjectId = queryParams.get("deleteProject");
  const open = deleteProjectId ? true : false;

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
          <Dialog.Content className="delete-project-modal">
            <Dialog.Title className="delete-project-modal__heading">
              Eliminar Proyecto
            </Dialog.Title>

            <p className="delete-project-modal__text">
              Ingresa tu contraseña para confirmar la eliminación del Proyecto.
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
