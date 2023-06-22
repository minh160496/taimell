import { BackTop } from "../Components/BackTop";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

interface ILayout {
  children: React.ReactNode;
  isHomePage?: boolean;
}

export const Layout = (props: ILayout) => {
  const { isHomePage = false, children } = props;
  return (
    <>
      <Header isHomePage={isHomePage} />
      {children}
      <Footer />
      <BackTop />
    </>
  );
};
