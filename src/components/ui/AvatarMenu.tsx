import { CircleUser } from "lucide-react";
import { Menu, Portal } from "@chakra-ui/react";

export default function AvatarMenu() {
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
                <p className="avatar-menu__user-name">Nombre</p>
                <p className="avatar-menu__user-email">email@email.com</p>
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
