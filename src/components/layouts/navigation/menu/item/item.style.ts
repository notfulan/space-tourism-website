import clsx from "clsx";

export const item = clsx("h-7", "md:h-24", "flex", "items-center", "relative");

export const index = clsx("mr-3.5", "font-bold", "md:hidden", "lg:inline");

export const activated = clsx(
  "after:absolute",
  "after:bg-white",
  "after:right-0",
  "after:bottom-0",
  "after:h-7",
  "after:w-0.5",
  "md:after:w-full",
  "md:after:h-0.5"
);
