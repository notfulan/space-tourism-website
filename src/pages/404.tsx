import type { NextPage } from "next";
import { Head } from "templates/notfound";
import { Header } from "templates/index";

const Index: NextPage = () => {
  return (
    <div>
      <Head />
      <Header />
    </div>
  );
};

export default Index;
