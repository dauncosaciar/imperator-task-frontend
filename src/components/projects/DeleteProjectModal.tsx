import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Dialog, Portal } from "@chakra-ui/react";
import { Shredder, X } from "lucide-react";
import Form from "../form/Form";
import { CheckPasswordFormData } from "@/types";
import DeleteProjectForm from "./DeleteProjectForm";

export default function DeleteProjectModal() {
  const navigate = useNavigate();

  // Read if modal exists
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const deleteProjectId = queryParams.get("deleteProject");
  const open = deleteProjectId ? true : false;

  const initialValues: CheckPasswordFormData = {
    password: ""
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  // With this useEffect, when the modal closes, the form data is reset whether the user submits the data or decides to close it without submitting anything
  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  const handleForm = (formData: CheckPasswordFormData) =>
    console.log("formData:", formData);

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

            <Form
              handleSubmit={handleSubmit}
              fnSubmit={handleForm}
              InnerForm={DeleteProjectForm}
              register={register}
              errors={errors}
              // mutationExecuting={isPending}
              mutationExecuting={false}
              spinnerMessage="Eliminando proyecto"
              submitIcon={Shredder}
              submitText="Eliminar Proyecto"
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
