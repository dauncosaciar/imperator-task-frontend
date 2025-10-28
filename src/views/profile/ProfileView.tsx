import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { changeDocumentTitle } from "@/utils";
import Spinner from "@/components/ui/Spinner";
import EditProfile from "@/components/profile/EditProfile";

export default function ProfileView() {
  const { data, isLoading } = useAuth();

  useEffect(() => {
    const documentTitle = "Mi Cuenta";
    changeDocumentTitle(documentTitle);
  }, []);

  if (isLoading) return <Spinner />;

  if (data) return <EditProfile data={data} />;
}
