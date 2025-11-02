import { useEffect } from "react";
import { changeDocumentTitle } from "@/utils";

export default function ChangePasswordView() {
  useEffect(() => {
    const documentTitle = "Cambiar tu Contraseña";
    changeDocumentTitle(documentTitle);
  }, []);

  return (
    <div className="change-password-view">
      <h2 className="change-password-view__heading">Cambia tu Contraseña</h2>
      <p className="change-password-view__text">
        Actualiza tu contraseña si lo necesitas.
      </p>

      <div className="change-password-view__content"></div>
    </div>
  );
}
