import {
  Navigate,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import { Dialog, Portal } from "@chakra-ui/react";
import { X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getTaskById } from "@/api/TaskApi";
import { toast } from "sonner";

export default function TaskDetailsModal() {
  const params = useParams();
  const projectId = params.projectId!;
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("viewTask")!;
  const open = taskId ? true : false;

  const { data, isError, error } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskById({ projectId, taskId }),
    enabled: !!taskId,
    refetchOnWindowFocus: false,
    retry: false
  });

  if (isError) {
    toast.error(error.message, { id: "error" });
    return <Navigate to={`/projects/${projectId}`} />;
  }

  console.log("data:", data);

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
          <Dialog.Content className="task-details-modal">
            <p className="task-details-modal__created-at">Agregada el:</p>
            <p className="task-details-modal__updated-at">
              Actualizada por última vez el:
            </p>

            <Dialog.Title className="task-details-modal__heading">
              Tarea: Título aquí
            </Dialog.Title>

            <p className="task-details-modal__description">Descripción:</p>

            <div className="task-details-modal__status">
              <label className="task-details-modal__status-label">
                Estado actual:
              </label>
            </div>

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
