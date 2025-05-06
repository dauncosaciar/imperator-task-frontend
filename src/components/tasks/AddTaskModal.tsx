import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dialog, Portal } from "@chakra-ui/react";
import { Plus, X } from "lucide-react";
import { toast } from "sonner";
import Form from "../form/Form";
import TaskForm from "./TaskForm";
import { TaskFormData } from "@/types";
import { createTask } from "@/api/TaskApi";

export default function AddTaskModal() {
  const navigate = useNavigate();

  // Read if modal exists
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modalTask = queryParams.get("newTask");
  const open = modalTask ? true : false;

  // Get projectId
  const params = useParams();
  const projectId = params.projectId!;

  const initialValues: TaskFormData = {
    name: "",
    description: ""
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createTask,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      toast.success(data);
      navigate(location.pathname, { replace: true });
    }
  });

  // With this useEffect, when the modal closes, the form data is reset whether the user submits the data or decides to close it without submitting anything
  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  const handleForm = (formData: TaskFormData) => {
    const data = {
      projectId,
      formData
    };
    mutate(data);
  };

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

            <Form
              handleSubmit={handleSubmit}
              fnSubmit={handleForm}
              InnerForm={TaskForm}
              register={register}
              errors={errors}
              submitIcon={Plus}
              submitText="Crear Tarea"
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
