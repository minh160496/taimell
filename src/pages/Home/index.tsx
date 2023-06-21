import { Layout } from "../../Layout";
import { BestSellers } from "./BestSellers";
import { Categories } from "./Categories";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <BestSellers />
      <Categories />
    </Layout>
  );
};
