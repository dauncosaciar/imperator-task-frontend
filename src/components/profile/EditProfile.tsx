import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import Form from "../form/Form";
import ProfileForm from "./ProfileForm";
import { ProfileFormData } from "@/types";

type EditProfileProps = {
  data: ProfileFormData;
};

export default function EditProfile({ data }: EditProfileProps) {
  const initialValues = {
    name: data.name,
    lastName: data.lastName,
    email: data.email
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  const handleForm = (formData: ProfileFormData) => {
    console.log("formData:", formData);
  };

  return (
    <div className="edit-profile">
      <h2 className="edit-profile__heading">Mi Cuenta</h2>

      <div className="edit-profile__content">
        <Form
          handleSubmit={handleSubmit}
          fnSubmit={handleForm}
          InnerForm={ProfileForm}
          register={register}
          errors={errors}
          // mutationExecuting={isPending}
          mutationExecuting={false}
          spinnerMessage="Guardando cambios"
          submitIcon={Pencil}
          submitText="Guardar Cambios"
        />
      </div>
    </div>
  );
}
