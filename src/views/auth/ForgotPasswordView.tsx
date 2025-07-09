import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SendHorizontal } from "lucide-react";
import Form from "@/components/form/Form";
import { changeDocumentTitle } from "@/utils";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { ForgotPasswordFormData } from "@/types";

export default function ForgotPasswordView() {
  const initialValues: ForgotPasswordFormData = {
    email: ""
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  useEffect(() => {
    changeDocumentTitle("¿Olvidaste tu contraseña?");
  }, []);

  const handleForm = (formData: ForgotPasswordFormData) => {
    console.log("formData:", formData);
  };

  return (
    <div className="forgot-password-view">
      <h2 className="forgot-password-view__heading">
        ¿Olvidaste tu contraseña?
      </h2>
      <p className="forgot-password-view__text">
        Ingresa tu email y recibe instrucciones para reestablecerla.
      </p>

      <div className="forgot-password-view__content">
        <Form
          handleSubmit={handleSubmit}
          fnSubmit={handleForm}
          InnerForm={ForgotPasswordForm}
          register={register}
          errors={errors}
          // mutationExecuting={isPending}
          mutationExecuting={false}
          spinnerMessage="Enviando instrucciones"
          submitIcon={SendHorizontal}
          submitText="Enviar Instrucciones"
        />

        <div className="forgot-password-view__question">
          <p className="forgot-password-view__question-text">
            ¿Ya tienes cuenta en ImperatorTask?
          </p>
          <Link
            to="/auth/login"
            className="forgot-password-view__question-link"
          >
            Inicia sesión
          </Link>
        </div>

        <div className="forgot-password-view__question">
          <p className="forgot-password-view__question-text">
            ¿Nuevo en ImperatorTask?
          </p>
          <Link
            to="/auth/register"
            className="forgot-password-view__question-link"
          >
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
}
