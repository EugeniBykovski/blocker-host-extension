import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

type ButtonVariants = "primary" | "secondary" | "outline";

export type ButtonProps = {
  variant: ButtonVariants;
} & ButtonHTMLAttributes<HTMLButtonElement>; // наследует все пропсы от обычной кнопки

const Button: FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "h-10 px-4 rounded cursor-pointer flex gap-2 items-center justify-center transition",
        {
          primary:
            "text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-50 shadow shadow-teal-500/30",
          secondary:
            "text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-50 shadow shadow-rose-500/30",
          outline:
            "hover:text-white border border-slate-300 hover:bg-slate-500 disabled:opacity-50",
        }[variant],
      )}
    />
  );
};

export default Button;
