import { Navigation } from "components/layouts";

type THeader = React.FC;

export const Header: THeader = () => {
  return (
    <header>
      <Navigation />
    </header>
  );
};
