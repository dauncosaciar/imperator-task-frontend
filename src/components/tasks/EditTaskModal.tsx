import { useNavigate, useParams } from "react-router-dom";
import { Dialog, Portal } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Pencil, X } from "lucide-react";
import Form from "../form/Form";
import TaskForm from "./TaskForm";
import { Task, TaskFormData } from "@/types";
import { updateTask } from "@/api/TaskApi";
import { toast } from "sonner";

type EditTaskModalProps = {
  data: Task;
  taskId: Task["_id"];
};

export default function EditTaskModal({ data, taskId }: EditTaskModalProps) {
  const navigate = useNavigate();

  // Get projectId
  const params = useParams();
  const projectId = params.projectId!;

  const initialValues: TaskFormData = {
    name: data.name,
    description: data.description
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: updateTask,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      queryClient.invalidateQueries({ queryKey: ["task", taskId] });
      toast.success(data);
      reset();
      navigate(location.pathname, { replace: true });
    }
  });

  const handleForm = (formData: TaskFormData) => {
    const data = {
      projectId,
      taskId,
      formData
    };
    mutate(data);
  };

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

            <Form
              handleSubmit={handleSubmit}
              fnSubmit={handleForm}
              InnerForm={TaskForm}
              register={register}
              errors={errors}
              mutationExecuting={isPending}
              spinnerMessage="Guardando cambios"
              submitIcon={Pencil}
              submitText="Editar Tarea"
            />

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
