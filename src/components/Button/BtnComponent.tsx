import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/helpers";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: ReactNode;
  className?: string;
}

const BtnComponent: React.FC<IButton> = ({
  text,
  icon,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        "transition-colors rounded-md text-center border w-full py-3 min-w-16 disabled:bg-red-300",
        !icon
          ? " bg-default_red border-default_red hover:bg-hover_red hover:border-hover_red text-white"
          : "text-black bg-transparent hover:bg-[#f5f5f5] border font-semibold",
        className
      )}
    >
      {icon ? (
        <div className="flex items-center justify-center gap-3 text-center">
          <div>{icon}</div>
          <span>{text}</span>
        </div>
      ) : (
        <span className="text-xl font-bold">{text}</span>
      )}
    </button>
  );
};

export default BtnComponent;
