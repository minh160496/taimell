import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { BackTop } from "../Components/BackTop";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BackTop />
    </>
  );
};
