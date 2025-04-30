import { Link } from "react-router-dom";
import { AlignLeft } from "lucide-react";
import Logo from "./Logo";
import AvatarMenu from "./AvatarMenu";

type HeaderProps = {
  isMobile: boolean;
  onOpen: () => void;
};

export default function Header({ isMobile, onOpen }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__content">
        {isMobile && (
          <>
            <button className="header__button" type="button" onClick={onOpen}>
              <AlignLeft />
            </button>

            <Link to="/">
              <Logo />
            </Link>
          </>
        )}

        <button className="header__button" type="button">
          <AvatarMenu />
        </button>
      </div>
    </header>
  );
}
