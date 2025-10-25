import { Link, useLocation } from "react-router-dom";
import { CircleUserRound, Fingerprint } from "lucide-react";

const profileTabs = [
  { name: "Mi Cuenta", href: "/profile", icon: CircleUserRound },
  {
    name: "Cambiar Contraseña",
    href: "/profile/change-password",
    icon: Fingerprint
  }
];

export default function ProfileTabs() {
  const location = useLocation();

  return (
    <div className="profile-tabs">
      <nav className="profile-tabs__nav">
        {profileTabs.map(profileTab => {
          const isActive = location.pathname === profileTab.href;

          return (
            <Link
              key={profileTab.name}
              className={`profile-tabs__nav-tab-link${
                isActive ? " active" : ""
              }`}
              to={profileTab.href}
            >
              <profileTab.icon />
              {profileTab.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
