import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { IconArrow } from "../../Components/IconArrow";
import { MotionHeading } from "./Motion";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Hero = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const banners = ["public/banner.png"];

  return (
    <Box
      position={"relative"}
      aspectRatio={{ base: 1, md: 2.8 }}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconArrow
        action="prev"
        aria-label="left-arrow"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      />
      <IconArrow
        action="next"
        aria-label="right-arrow"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      />

      <Box pos="absolute" top={0} left={0} w="full" h="full" zIndex="2">
        <Center h="full" style={{ fontFamily: "Pacifico" }}>
          <MotionHeading>
            <Stack>
              <Heading
                style={{ fontFamily: "Pacifico" }}
                size={{ base: "md", sm: "xl", lg: "2xl" }}
                textTransform="uppercase"
                textAlign="center"
                color="pink.700"
              >
                taimell
              </Heading>
              <Text
                textAlign="center"
                fontSize={{ base: "md", sm: "xl", lg: "2xl" }}
                color="gray.600"
              >
                Slogan of my web content limited in 24 character!
              </Text>
            </Stack>
          </MotionHeading>
        </Center>
      </Box>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {banners.map((url, index) => (
          <Box
            key={index}
            aspectRatio={{ base: 1, md: 2.8 }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
};
