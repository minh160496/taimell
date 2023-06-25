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
        <Box mt="44px" py="36px" pos="relative" overflow="hidden">
          <BestSellers />
          <Box
            pos="absolute"
            right={{ base: "-12px", lg: "44px" }}
            top={{ base: "-12px", md: "68px" }}
          >
            <MotionSon>
              <Image w={{ base: "200px", md: "400px" }} src="/son-thoi.png" />
            </MotionSon>
          </Box>

          <Box
            pos="absolute"
            left={{ base: "20px", lg: "-160px" }}
            top={{ base: "-20px", md: "-40px", lg: "20%" }}
          >
            <MotionHoa>
              <Image
                w={{ base: "150px", md: "300px", lg: "700px" }}
                src="/hoa.png"
              />
            </MotionHoa>
          </Box>
        </Box>
      </Motion>

      <Box
        mt="80px"
        py="36px"
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
        <Box pos="absolute" top="20%" right={{ base: "-10px", lg: "0" }}>
          <MotionHoa>
            <Image
              w={{ base: "150px", md: "200px", lg: "300px" }}
              src="/hoa-hong-2.png"
            />
          </MotionHoa>
        </Box>
      </Box>
      <Box mt="80px" py="36px" minH="400">
        {scrollTop > 1450 && (
          <Motion>
            <Blogs />
          </Motion>
        )}
      </Box>
      <Box mt="80px" py="36px" bg="pink.50" minH="400">
        {scrollTop > 2450 && (
          <Motion>
            <FeedBack />
          </Motion>
        )}
      </Box>
    </Layout>
  );
};
