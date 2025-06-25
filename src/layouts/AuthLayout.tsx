import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useBreakpointValue } from "@chakra-ui/react";
import Logo from "@/components/ui/Logo";

export default function AuthLayout() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false })!;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="auth-layout">
      <div className="auth-layout__grid">
        <div className="auth-layout__content">
          <div className="auth-layout__frame">
            <Logo />
            <Outlet />
          </div>
        </div>

        {!isMobile && (
          <div className="auth-layout__hero">
            <div className="auth-layout__welcome">
              <h1 className="auth-layout__title">Bienvenido a ImperatorTask</h1>
              <p className="auth-layout__text">
                El dashboard que te ayuda a llevar adelante proyectos y tareas
                de forma organizada.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
