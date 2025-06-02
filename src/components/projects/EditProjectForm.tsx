import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Pencil, Undo2 } from "lucide-react";
import { toast } from "sonner";
import Form from "../form/Form";
import { Project, ProjectFormData } from "@/types";
import ProjectForm from "./ProjectForm";
import { updateProject } from "@/api/ProjectApi";

type EditProjectFormProps = {
  data: ProjectFormData;
  projectId: Project["_id"];
};

export default function EditProjectForm({
  data,
  projectId
}: EditProjectFormProps) {
  const navigate = useNavigate();

  const initialValues: ProjectFormData = {
    projectName: data.projectName,
    clientName: data.clientName,
    description: data.description
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: updateProject,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["editProject", projectId] });
      toast.success(data);
      navigate("/");
    }
  });

  const handleForm = (formData: ProjectFormData) => {
    const data = {
      formData,
      projectId
    };
    mutate(data);
  };

  return (
    <div className="edit-project-form">
      <h1 className="edit-project-form__heading">Editar Proyecto</h1>
      <p className="edit-project-form__text">
        Edita los datos que necesites y guárdalos para mantener tu proyecto
        actualizado.
      </p>

      <nav className="edit-project-form__nav">
        <Link className="edit-project-form__nav-link" to="/">
          <Undo2 /> Volver a Mis Proyectos
        </Link>
      </nav>

      <div className="edit-project-form__content">
        <Form
          handleSubmit={handleSubmit}
          fnSubmit={handleForm}
          InnerForm={ProjectForm}
          register={register}
          errors={errors}
          mutationExecuting={isPending}
          spinnerMessage="Guardando cambios"
          submitIcon={Pencil}
          submitText="Guardar Cambios"
        />
      </div>
    </div>
  );
}
