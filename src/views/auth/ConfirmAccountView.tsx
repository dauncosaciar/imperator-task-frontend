import { useEffect } from "react";
import { Link } from "react-router-dom";
import { changeDocumentTitle } from "@/utils";

export default function ConfirmAccountView() {
  useEffect(() => {
    changeDocumentTitle("Confirma tu cuenta");
  }, []);

  return (
    <div className="confirm-account-view">
      <h2 className="confirm-account-view__heading">Confirma tu cuenta</h2>
      <p className="confirm-account-view__text">
        Ingresando el código o token que recibiste por email para que puedas
        comenzar a utilizarla.
      </p>

      <div className="confirm-account-view__content">
        <form className="form">
          <div className="form__field">
            <label className="form__label">Código de 6 dígitos</label>
          </div>
        </form>

        <div className="confirm-account-view__question">
          <p className="confirm-account-view__question-text">
            ¿Venció tu token de confirmación?
          </p>
          <Link to="#" className="confirm-account-view__question-link">
            Solicita uno nuevo
          </Link>
        </div>
      </div>
    </div>
  );
}
