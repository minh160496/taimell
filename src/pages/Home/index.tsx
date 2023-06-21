import { Layout } from "../../Layout";
import { BestSellers } from "./BestSellers";
import { Categories } from "./Categories";
import { Hero } from "./Hero";
import { Box } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Layout>
      <Box>
        <Hero />
      </Box>
      <Box mt="80px">
        <BestSellers />
      </Box>
      <Box mt="80px">
        <Categories />
      </Box>
    </Layout>
  );
};
