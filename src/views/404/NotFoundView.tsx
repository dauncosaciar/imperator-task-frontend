import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Undo2, Unlink } from "lucide-react";
import BasicMessage from "@/components/ui/BasicMessage";
import { changeDocumentTitle } from "@/utils";

export default function NotFoundView() {
  useEffect(() => {
    changeDocumentTitle("Página o recurso no encontrado");
  }, []);

  return (
    <div className="not-found-view">
      <BasicMessage
        messageIcon={Unlink}
        messageTitle="¡Ups! Lo sentimos"
        messageDescription="Parece que la página o recurso que estabas buscando ya no está disponible."
      />

      <Link className="not-found-view__link" to="/">
        <Undo2 /> Volver a Mis Proyectos
      </Link>
    </div>
  );
}
