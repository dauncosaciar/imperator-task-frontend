import { useEffect } from "react";
import { changeDocumentTitle } from "@/utils";

export default function ProfileView() {
  useEffect(() => {
    const documentTitle = "Mi Cuenta";
    changeDocumentTitle(documentTitle);
  }, []);

  return <div>ProfileView</div>;
}
