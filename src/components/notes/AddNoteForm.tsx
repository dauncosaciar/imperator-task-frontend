import { useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import Form from "../form/Form";
import NoteForm from "./NoteForm";
import { NoteFormData } from "@/types";
import { createNote } from "@/api/NoteApi";

export default function AddNoteForm() {
  // Get projectId
  const params = useParams();
  const projectId = params.projectId!;

  // Get taskId
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("viewTask")!;

  const initialValues: NoteFormData = {
    content: ""
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  const { isPending, mutate } = useMutation({
    mutationFn: createNote,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      toast.success(data);
      reset();
    }
  });

  const handleForm = (formData: NoteFormData) => {
    const data = {
      projectId,
      taskId,
      formData
    };
    mutate(data);
  };

  return (
    <div className="add-note-form">
      <Form
        handleSubmit={handleSubmit}
        fnSubmit={handleForm}
        InnerForm={NoteForm}
        register={register}
        errors={errors}
        mutationExecuting={isPending}
        spinnerMessage="Creando nota"
        submitIcon={Plus}
        submitText="Crear Nota"
      />
    </div>
  );
}
