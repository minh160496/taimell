import { useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Center,
  Heading,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

interface ITabProduct {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

export const TabProducts = (props: ITabProduct) => {
  const { title, subTitle, children } = props;
  return (
    <Box>
      <Center>
        <Heading>{title}</Heading>
      </Center>
      <Center mb="40px">
        <Text textAlign="center">{subTitle}</Text>
      </Center>
      <CarouselProducts>{children}</CarouselProducts>
    </Box>
  );
};

interface ICarouselProducts {
  children: React.ReactNode;
}

export const CarouselProducts = (props: ICarouselProducts) => {
  const { children } = props;
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
  const side = useBreakpointValue({ base: "2px", md: "10px" });
  return (
    <Box pos="relative">
      <IconButton
        bg="pink.400"
        _hover={{ background: "pink.300" }}
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      <IconButton
        bg="pink.400"
        _hover={{ background: "pink.300" }}
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {children}
      </Slider>
    </Box>
  );
};
