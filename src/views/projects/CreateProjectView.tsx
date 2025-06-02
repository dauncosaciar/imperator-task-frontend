import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Plus, Undo2 } from "lucide-react";
import { toast } from "sonner";
import { ProjectFormData } from "@/types";
import ProjectForm from "@/components/projects/ProjectForm";
import Form from "@/components/form/Form";
import { createProject } from "@/api/ProjectApi";
import { changeDocumentTitle } from "@/utils";

export default function CreateProjectView() {
  const navigate = useNavigate();

  const initialValues: ProjectFormData = {
    projectName: "",
    clientName: "",
    description: ""
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  const { isPending, mutate } = useMutation({
    mutationFn: createProject,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      toast.success(data);
      navigate("/");
    }
  });

  useEffect(() => {
    changeDocumentTitle("Crear Proyecto");
  }, []);

  const handleForm = (formData: ProjectFormData) => mutate(formData);

  return (
    <div className="create-project-view">
      <h1 className="create-project-view__heading">Crear Proyecto</h1>
      <p className="create-project-view__text">
        Completa el formulario y crea uno nuevo.
      </p>

      <nav className="create-project-view__nav">
        <Link className="create-project-view__nav-link" to="/">
          <Undo2 /> Volver a Mis Proyectos
        </Link>
      </nav>

      <div className="create-project-view__content">
        <Form
          handleSubmit={handleSubmit}
          fnSubmit={handleForm}
          InnerForm={ProjectForm}
          register={register}
          errors={errors}
          mutationExecuting={isPending}
          spinnerMessage="Creando proyecto"
          submitIcon={Plus}
          submitText="Crear Proyecto"
        />
      </div>
    </div>
  );
}
