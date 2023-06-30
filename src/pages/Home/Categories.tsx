import { Box, Container, Stack } from "@chakra-ui/react";
import { CardCat } from "../../Components/CardCat";
import { SectionModel } from "../../Components/Section";
import { Image } from "@chakra-ui/react";

export const Categories = () => {
  return (
    <Container maxW="6xl" as={Stack}>
      <SectionModel
        title="Categories"
        subTitle="the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that"
        path="/danh-sach-san-pham"
        after={<Image w={{ base: "50px", lg: "80px" }} src="/son-thoi.png" />}
      >
        {[1, 2, 3, 4, 5, 6].map((number) => (
          <Box px="10px" py="12px" key={number}>
            <CardCat />
          </Box>
        ))}
      </SectionModel>
    </Container>
  );
};
