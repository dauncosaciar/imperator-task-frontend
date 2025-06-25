import { Outlet } from "react-router-dom";
import Logo from "@/components/ui/Logo";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-layout__grid">
        <div className="auth-layout__content">
          <Logo />
          <Outlet />
        </div>

        <div className="auth-layout__hero">
          <h1 className="auth-layout__title">Bienvenido a ImperatorTask</h1>
          <p className="auth-layout__text">
            ImperatorTask te ayuda a llevar adelante proyectos y tareas de forma
            organizada.
          </p>
        </div>
      </div>
    </div>
  );
}
