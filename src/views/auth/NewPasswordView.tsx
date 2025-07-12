import { useEffect, useState } from "react";
import { changeDocumentTitle } from "@/utils";
import NewPasswordToken from "@/components/auth/NewPasswordToken";
import NewPasswordChange from "@/components/auth/NewPasswordChange";

export default function NewPasswordView() {
  const [isValidToken, setIsValidToken] = useState(true);

  useEffect(() => {
    changeDocumentTitle("Reestablece tu contraseña");
  }, []);

  return (
    <div className="new-password-view">
      <h2 className="new-password-view__heading">Reestablece tu contraseña</h2>
      <p className="new-password-view__text">
        Primero ingresando el código o token que recibiste por email, luego
        cambiándola.
      </p>

      <div className="new-password-view__content">
        {!isValidToken ? <NewPasswordToken /> : <NewPasswordChange />}
      </div>
    </div>
  );
}
