import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import Form from "../form/Form";
import NoteForm from "./NoteForm";

export default function AddNoteForm() {
  const initialValues = {
    content: ""
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  const handleForm = formData => {
    console.log("formData:", formData);
  };

  return (
    <div className="add-note-form">
      <Form
        handleSubmit={handleSubmit}
        fnSubmit={handleForm}
        InnerForm={NoteForm}
        register={register}
        errors={errors}
        // mutationExecuting={isPending}
        mutationExecuting={false}
        spinnerMessage="Creando nota"
        submitIcon={Plus}
        submitText="Crear Nota"
      />
    </div>
  );
}
