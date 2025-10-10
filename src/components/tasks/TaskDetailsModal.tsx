import { ChangeEvent } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import { Dialog, Portal } from "@chakra-ui/react";
import { X } from "lucide-react";
import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTaskById, updateStatus } from "@/api/TaskApi";
import { formatDate } from "@/utils";
import { statusTranslations } from "@/locales/es";
import { TaskStatus } from "@/types";
import Spinner from "../ui/Spinner";

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

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateStatus,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      queryClient.invalidateQueries({ queryKey: ["task", taskId] });
      toast.success(data);
    }
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value as TaskStatus;
    const data = { projectId, taskId, status };
    mutate(data);
  };

  if (isError) {
    toast.error(error.message, { id: "error" });
    return <Navigate to={`/projects/${projectId}`} />;
  }

  if (data)
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
              <p className="task-details-modal__created-at">
                <span className="task-details-modal__datetime-label">
                  Creada el:
                </span>{" "}
                {formatDate(data.createdAt)}
              </p>
              <p className="task-details-modal__updated-at">
                <span className="task-details-modal__datetime-label">
                  Actualizada por última vez el:
                </span>{" "}
                {formatDate(data.updatedAt)}
              </p>

              <Dialog.Title className="task-details-modal__heading">
                Tarea: {data.name}
              </Dialog.Title>

              <p className="task-details-modal__description">
                {data.description}
              </p>

              {data.updatedBy && (
                <p className="task-details-modal__updated-by">
                  <span className="task-details-modal__updated-by-label">
                    Estado actualizado por:
                  </span>{" "}
                  {data.updatedBy.name}, {data.updatedBy.lastName}
                </p>
              )}

              <div className="task-details-modal__status">
                <label
                  htmlFor="taskStatus"
                  className="task-details-modal__status-label"
                >
                  Estado actual
                </label>

                <div className="task-details-modal__status-value">
                  <select
                    id="taskStatus"
                    className="task-details-modal__status-select"
                    defaultValue={data.status}
                    onChange={handleChange}
                  >
                    {Object.entries(statusTranslations).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </select>

                  {isPending && <Spinner />}
                </div>
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
