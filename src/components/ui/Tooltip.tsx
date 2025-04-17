import { ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  tooltipText: string;
};

export default function Tooltip({ children, tooltipText }: TooltipProps) {
  return (
    <div className="tooltip">
      {children}

      <span className="tooltip__text">{tooltipText}</span>
    </div>
  );
}
