import { useEffect } from "react";
import { changeDocumentTitle } from "@/utils";

export default function ChangePasswordView() {
  useEffect(() => {
    const documentTitle = "Cambiar Contraseña";
    changeDocumentTitle(documentTitle);
  }, []);

  return <div>ChangePasswordView</div>;
}
