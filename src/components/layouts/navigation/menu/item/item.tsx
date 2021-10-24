import * as style from "./item.style";
import Anchor from "next/link";
import clsx from "clsx";

type TItem = React.FC<{
  href: string;
  name: string;
  index: string;
  isActive?: boolean;
}>;

export const Item: TItem = ({ href, name, index, isActive }) => {
  return (
    <li className={clsx(style.item, isActive && style.activated)}>
      <Anchor href={href}>
        <a>
          <span className={style.index}>{index}</span> {name.toUpperCase()}
        </a>
      </Anchor>
    </li>
  );
};
