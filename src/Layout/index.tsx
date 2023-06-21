import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
