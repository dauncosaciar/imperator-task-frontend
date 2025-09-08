import { ElementType } from "react";

type BasicMessageProps = {
  messageIcon?: ElementType;
  messageTitle: string;
  messageDescription?: string;
};

export default function BasicMessage({
  messageIcon,
  messageTitle,
  messageDescription
}: BasicMessageProps) {
  const Icon = messageIcon;

  return (
    <div className="basic-message">
      {Icon && <Icon />}

      <div className="basic-message__text">
        <h3 className="basic-message__title">{messageTitle}</h3>

        {messageDescription && (
          <p className="basic-message__description">{messageDescription}</p>
        )}
      </div>
    </div>
  );
}
