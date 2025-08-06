import { CircleUser } from "lucide-react";
import { Menu, Portal } from "@chakra-ui/react";
import { useAuth } from "@/hooks/useAuth";

export default function AvatarMenu() {
  const { data: user } = useAuth();

  if (user)
    return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <div className="app-avatar">
            <CircleUser color="#0f6130" />
          </div>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner className="avatar-menu">
            <Menu.Content className="avatar-menu__content">
              <div className="avatar-menu__info">
                <div className="avatar-menu__image">
                  <CircleUser color="#0f6130" />
                </div>
                <div className="avatar-menu__user">
                  <p className="avatar-menu__user-name">
                    {user.name}, {user.lastName}
                  </p>
                  <p className="avatar-menu__user-email">{user.email}</p>
                </div>
              </div>

              <nav className="avatar-menu__nav">
                <a className="avatar-menu__nav-link" href="#">
                  Mi Perfil
                </a>
                <a className="avatar-menu__nav-link" href="#">
                  Cerrar Sesión
                </a>
              </nav>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    );
}
