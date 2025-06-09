import { useNavigate } from "react-router-dom";
import { Dialog, Portal } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Pencil, X } from "lucide-react";
import { Task, TaskFormData } from "@/types";
import Form from "../form/Form";
import TaskForm from "./TaskForm";

type EditTaskModalProps = {
  data: Task;
};

export default function EditTaskModal({ data }: EditTaskModalProps) {
  const navigate = useNavigate();

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

  const { isPending, mutate } = useMutation({
    onError: error => {
      console.log("onError...");
    },
    onSuccess: data => {
      console.log("onSuccess...");
    }
  });

  const handleForm = (formData: TaskFormData) => {
    console.log("formData:", formData);
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
