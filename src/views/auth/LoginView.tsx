import { useEffect } from "react";
import { changeDocumentTitle } from "@/utils";

export default function LoginView() {
  useEffect(() => {
    changeDocumentTitle("Inicia sesión");
  }, []);

  return <div>LoginView</div>;
}
