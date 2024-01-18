import React from "react";
import clsx from "clsx";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-xl")}>
      <Shield className="w-12 h-12" />
      Easy Block
    </div>
  );
};

export const Shield = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4m0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3Z"
    />
  </svg>
);

export default Logo;
