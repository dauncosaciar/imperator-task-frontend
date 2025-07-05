import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RectangleEllipsis } from "lucide-react";
import Form from "@/components/form/Form";
import { changeDocumentTitle } from "@/utils";
import NewConfirmationCodeForm from "@/components/auth/NewConfirmationCodeForm";
import { RequestConfirmationCodeFormData } from "@/types";

export default function RequestNewCodeView() {
  const initialValues: RequestConfirmationCodeFormData = {
    email: ""
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  useEffect(() => {
    changeDocumentTitle("Solicita un nuevo código de confirmación de cuenta");
  }, []);

  const handleForm = (formData: RequestConfirmationCodeFormData) => {
    console.log("formData:", formData);
  };

  return (
    <div className="request-new-code-view">
      <h2 className="request-new-code-view__heading">
        Solicita un nuevo código de confirmación
      </h2>
      <p className="request-new-code-view__text">Y activa tu cuenta.</p>

      <div className="request-new-code-view__content">
        <Form
          handleSubmit={handleSubmit}
          fnSubmit={handleForm}
          InnerForm={NewConfirmationCodeForm}
          register={register}
          errors={errors}
          // mutationExecuting={isPending}
          mutationExecuting={false}
          spinnerMessage="Solicitando código"
          submitIcon={RectangleEllipsis}
          submitText="Solicitar Código"
        />

        <div className="request-new-code-view__question">
          <p className="request-new-code-view__question-text">
            ¿Ya tienes cuenta en ImperatorTask?
          </p>
          <Link
            to="/auth/login"
            className="request-new-code-view__question-link"
          >
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
