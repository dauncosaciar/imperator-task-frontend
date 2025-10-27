import { Link, useNavigate } from "react-router-dom";
import { Menu, Portal } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import UserInitials from "./UserInitials";

export default function AvatarMenu() {
  const { data: user } = useAuth();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const logout = () => {
    queryClient.removeQueries();
    localStorage.removeItem("IMPERATOR_AUTH_TOKEN");
    navigate("/auth/login");
  };

  if (user)
    return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <div className="app-avatar">
            <UserInitials user={user} />
          </div>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner className="avatar-menu">
            <Menu.Content className="avatar-menu__content">
              <div className="avatar-menu__info">
                <div className="avatar-menu__initials">
                  <UserInitials user={user} />
                </div>
                <div className="avatar-menu__user">
                  <p className="avatar-menu__user-name">
                    {user.name}, {user.lastName}
                  </p>
                  <p className="avatar-menu__user-email">{user.email}</p>
                </div>
              </div>

              <nav className="avatar-menu__nav">
                <Link className="avatar-menu__nav-link" to="/profile">
                  Perfil
                </Link>
                <button
                  type="button"
                  className="avatar-menu__nav-link"
                  onClick={logout}
                >
                  Cerrar Sesión
                </button>
              </nav>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    );
}
