import { ReactNode } from "react";

type BasicMessageProps = {
  children: ReactNode;
};

export default function BasicMessage({ children }: BasicMessageProps) {
  return (
    <div className="basic-message">
      <p className="basic-message__text">{children}</p>
    </div>
  );
}
