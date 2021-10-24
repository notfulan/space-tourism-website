import clsx from "clsx";

export const nav = clsx(
  "flex",
  "items-center",
  "h-20",
  "md:h-24",
  "md:mt-9",
  "px-6",
  "md:px-0"
);

export const logo = clsx("md:ml-14", "w-10", "h-10", "md:h-12", "md:w-12");

export const line = clsx("xl:flex-1", "-mr-16", "ml-16", "opacity-30");

export const burger = clsx("md:hidden", "ml-auto", "z-10");
