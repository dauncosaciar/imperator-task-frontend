import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Dialog, Portal } from "@chakra-ui/react";
import { Plus, X } from "lucide-react";
import Form from "../form/Form";
import TeamMemberForm from "./TeamMemberForm";
import { TeamMemberFormData } from "@/types";

export default function AddMemberModal() {
  const navigate = useNavigate();

  // Read if modal exists
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const newMember = queryParams.get("newMember");
  const open = newMember ? true : false;

  // Get projectId
  const params = useParams();
  const projectId = params.projectId!;

  const initialValues: TeamMemberFormData = {
    email: ""
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

  const handleForm = (formData: TeamMemberFormData) => {
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
          <Dialog.Content className="add-member-modal">
            <Dialog.Title className="add-member-modal__heading">
              Nuevo Colaborador
            </Dialog.Title>

            <p className="add-member-modal__text">
              Busca el Colaborador por su email para agregarlo.
            </p>

            <Form
              handleSubmit={handleSubmit}
              fnSubmit={handleForm}
              InnerForm={TeamMemberForm}
              register={register}
              errors={errors}
              // mutationExecuting={isPending}
              mutationExecuting={false}
              spinnerMessage="Buscando"
              submitIcon={Plus}
              submitText="Buscar Usuario"
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
