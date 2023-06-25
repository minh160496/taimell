import {
  Box,
  Center,
  Heading,
  Text,
  useBreakpointValue,
  Button,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import Slider from "react-slick";
import { IconArrow } from "./IconArrow";

interface ITabProduct {
  title: string;
  subTitle: string;
  path?: string;
  children: React.ReactNode;
}

export const SectionModel = (props: ITabProduct) => {
  const { title, subTitle, path = "/", children } = props;
  return (
    <Box>
      <Center>
        <Heading>{title}</Heading>
      </Center>
      <Center mb="24px">
        <Text textAlign="center" color="gray.600">
          {subTitle}
        </Text>
      </Center>
      <CarouselProducts path={path}>{children}</CarouselProducts>
    </Box>
  );
};

interface ICarouselProducts {
  path?: string;
  children: React.ReactNode;
}

export const CarouselProducts = (props: ICarouselProducts) => {
  const { path, children } = props;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [slider, setSlider] = useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "50%" });
  const side = useBreakpointValue({ base: "10px", md: "-20px" });

  return (
    <>
      <Box pos="relative">
        <IconArrow
          w="40px"
          h="40px"
          action="prev"
          aria-label="left-arrow"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        />
        <IconArrow
          w="40px"
          h="40px"
          action="next"
          aria-label="left-arrow"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        />
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {children}
        </Slider>
      </Box>
      <Center>
        <Button
          as={Link}
          mt="24px"
          colorScheme="pink"
          variant="link"
          href={path}
        >
          Xem tất cả
        </Button>
      </Center>
    </>
  );
};
