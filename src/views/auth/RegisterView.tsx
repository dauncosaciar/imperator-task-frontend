import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserPlus } from "lucide-react";
import { changeDocumentTitle } from "@/utils";
import Form from "@/components/form/Form";
import RegisterForm from "@/components/auth/RegisterForm";
import { RegistrationFormData } from "@/types";

export default function RegisterView() {
  const initialValues: RegistrationFormData = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  const passwordWatch = watch("password");

  useEffect(() => {
    changeDocumentTitle("Regístrate");
  }, []);

  const handleForm = (formData: RegistrationFormData) => {
    console.log("formData:", formData);
  };

  return (
    <div className="register-view">
      <h2 className="register-view__heading">Regístrate</h2>
      <p className="register-view__text">
        Y comienza a ordenar tus proyectos y tareas.
      </p>

      <div className="register-view__content">
        <Form
          handleSubmit={handleSubmit}
          fnSubmit={handleForm}
          InnerForm={RegisterForm}
          register={register}
          errors={errors}
          passwordWatch={passwordWatch}
          // mutationExecuting={isPending}
          mutationExecuting={false}
          spinnerMessage="Creando proyecto"
          submitIcon={UserPlus}
          submitText="Crear Cuenta"
        />

        <div className="register-view__question">
          <p className="register-view__question-text">
            ¿Ya tienes cuenta en ImperatorTask?
          </p>
          <Link to="/auth/login" className="register-view__question-link">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
