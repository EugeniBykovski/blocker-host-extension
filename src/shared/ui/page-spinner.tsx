import React from "react";
import Spinner from "./spinner";
import clsx from "clsx";

const PageSpinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-slate-100",
        className,
      )}
    >
      <Spinner className="text-teal-600 w-24 h-24 " />
    </div>
  );
};

export default PageSpinner;
