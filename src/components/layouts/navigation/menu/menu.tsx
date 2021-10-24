import * as style from "./menu.style";
import { Item } from "./item";
import { useRouter } from "next/router";
import clsx from "clsx";

type TMenu = React.FC<{ isOpen: boolean }>;

export const Menu: TMenu = ({ isOpen }) => {
  const router = useRouter();

  return (
    <ul className={clsx(style.menu, isOpen ? "flex" : "hidden")}>
      <Item
        isActive={router.pathname === "/"}
        index="00"
        name="home"
        href="/"
      />
      <Item
        isActive={router.pathname === "/destination"}
        index="01"
        name="destination"
        href="/destination"
      />
      <Item
        isActive={router.pathname === "/crew"}
        index="02"
        name="crew"
        href="/crew"
      />
      <Item
        isActive={router.pathname === "/technology"}
        index="03"
        name="technology"
        href="/technology"
      />
    </ul>
  );
};
