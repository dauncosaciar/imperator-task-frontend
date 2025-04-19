import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Pencil, Undo2 } from "lucide-react";
import Form from "../form/Form";
import { ProjectFormData } from "@/types";
import ProjectForm from "./ProjectForm";

type EditProjectFormProps = {
  data: ProjectFormData;
};

export default function EditProjectForm({ data }: EditProjectFormProps) {
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

  const handleForm = (formData: ProjectFormData) => {
    console.log("formData:", formData);
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
          submitIcon={Pencil}
          submitText="Guardar Cambios"
        />
      </div>
    </div>
  );
}
