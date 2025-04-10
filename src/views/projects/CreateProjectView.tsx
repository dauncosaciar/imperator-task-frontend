import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Plus, Undo2 } from "lucide-react";
import { ProjectFormData } from "@/types";
import ProjectForm from "@/components/projects/ProjectForm";
import Form from "@/components/form/Form";
import { createProject } from "@/api/ProjectApi";

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

  const handleForm = async (data: ProjectFormData) => {
    await createProject(data);
    navigate("/");
  };

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
        {/* <form className="form" onSubmit={handleSubmit(handleForm)} noValidate>
          <ProjectForm register={register} errors={errors} />

          <button className="form__submit" type="submit">
            <Plus /> Crear Proyecto
          </button>
        </form> */}

        <Form
          handleSubmit={handleSubmit}
          fnSubmit={handleForm}
          InnerForm={ProjectForm}
          register={register}
          errors={errors}
          submitIcon={Plus}
          submitText="Crear Proyecto"
        />
      </div>
    </div>
  );
}
