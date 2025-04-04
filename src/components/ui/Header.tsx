import { AlignLeft, Ellipsis } from "lucide-react";
import Logo from "./Logo";

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
            <Logo />
          </>
        )}

        <button className="header__button" type="button">
          <Ellipsis />
        </button>
      </div>
    </header>
  );
}
