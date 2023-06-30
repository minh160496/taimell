import { SectionModel } from "../../Components/Section";
import { CardBlog } from "../../Components/CardBlog";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export const Blogs = () => {
  return (
    <Box overflow="hidden" pt="32px">
      <Container maxW="6xl">
        <SectionModel
          title="Tin tức"
          subTitle="Cập nhật tin tức mới nhất"
          path="/tin-tuc"
          after={
            <Image w={{ base: "80px", lg: "120px" }} src="/hoa-hong-2.png" />
          }
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <Box px="10px" py="12px" key={number}>
              <CardBlog />
            </Box>
          ))}
        </SectionModel>
      </Container>
    </Box>
  );
};
