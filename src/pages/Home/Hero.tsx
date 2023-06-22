import { Box, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { IconArrow } from "../../Components/IconArrow";

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

  const banners = [
    "https://cdn.shopify.com/s/files/1/0745/8989/6993/files/herom.jpg?v=1682582225&width=1100",
    "https://cdn.shopify.com/s/files/1/0745/8989/6993/files/herom.jpg?v=1682582225&width=1100",
    "https://cdn.shopify.com/s/files/1/0745/8989/6993/files/herom.jpg?v=1682582225&width=1100",
  ];

  return (
    <Box
      position={"relative"}
      aspectRatio={{ base: 1, md: 2 }}
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
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {banners.map((url, index) => (
          <Box
            key={index}
            aspectRatio={{ base: 1, md: 2 }}
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
