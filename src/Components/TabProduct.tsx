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
      <Center>
        <Text>{subTitle}</Text>
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
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
