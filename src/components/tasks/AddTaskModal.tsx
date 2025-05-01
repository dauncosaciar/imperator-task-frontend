import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Dialog, Portal } from "@chakra-ui/react";
import { Plus, X } from "lucide-react";
import Form from "../form/Form";
import TaskForm from "./TaskForm";
import { TaskFormData } from "@/types";

export default function AddTaskModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modalTask = queryParams.get("newTask");
  const open = modalTask ? true : false;

  const initialValues: TaskFormData = {
    name: "",
    description: ""
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  const handleForm = (formData: TaskFormData) => {
    console.log("formData:", formData);
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
