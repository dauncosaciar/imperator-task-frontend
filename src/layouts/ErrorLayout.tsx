import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function ErrorLayout() {
  const { isError, isLoading } = useAuth();

  if (isLoading) return null;

  if (isError) return <Navigate to="/auth/login" />;

  return (
    <div className="error-layout">
      <div className="error-layout__content">
        <Outlet />
      </div>
    </div>
  );
}
