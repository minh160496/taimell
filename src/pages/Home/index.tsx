import { Box, Image } from "@chakra-ui/react";
import { Layout } from "../../Layout";
import { useWindowScroll } from "../../hooks/useWindow";
import { BestSellers } from "./BestSellers";
import { Blogs } from "./Blogs";
import { Categories } from "./Categories";
import { FeedBack } from "./FeedBack";
import { Hero } from "./Hero";
import { Motion, MotionHoa, MotionSon } from "./Motion";

export const Home = () => {
  const { scrollTop } = useWindowScroll();
  return (
    <Layout isHomePage>
      <Box>
        <Hero />
      </Box>

      <Motion>
        <Box mt="44px" py={"36px"} pos="relative" overflow="hidden">
          <BestSellers />
        </Box>
      </Motion>

      <Box
        mt="80px"
        pt="42px"
        pb="36px"
        bg="pink.50"
        minH="400"
        pos="relative"
        overflow="hidden"
      >
        {scrollTop > 750 && (
          <Motion>
            <Categories />
          </Motion>
        )}
      </Box>
      <Box mt="80px" py="36px" minH="400">
        {scrollTop > 1400 && (
          <Motion>
            <Blogs />
          </Motion>
        )}
      </Box>
      <Box mt="80px" py="36px" bg="pink.50" minH="400">
        {scrollTop > 2400 && (
          <Motion>
            <FeedBack />
          </Motion>
        )}
      </Box>
    </Layout>
  );
};
