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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-align-left-icon lucide-align-left"
              >
                <path d="M15 12H3" />
                <path d="M17 18H3" />
                <path d="M21 6H3" />
              </svg>
            </button>
            <Logo />
          </>
        )}

        <button className="header__button" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-ellipsis-icon lucide-ellipsis"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>
    </header>
  );
}
