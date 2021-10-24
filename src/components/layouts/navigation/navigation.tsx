import * as style from "./navigation.style";
import Image from "next/image";
import { Menu } from "./menu";
import { useState } from "react";

type TNavigation = React.FC;

export const Navigation: TNavigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={style.nav}>
      <span className={style.logo}>
        <Image width="48px" height="48px" src="/assets/shared/logo.svg" />
      </span>
      <hr className={style.line} />
      <Menu isOpen={isOpen} />
      <span className={style.burger} onClick={(e) => setOpen((o) => !o)}>
        <Image
          width={isOpen ? "19px" : "24px"}
          height={isOpen ? "19px" : "21px"}
          src={`/assets/shared/${
            isOpen ? "icon-close.svg" : "icon-hamburger.svg"
          }`}
        />
      </span>
    </nav>
  );
};
