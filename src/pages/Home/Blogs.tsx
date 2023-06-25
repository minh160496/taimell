import { SectionModel } from "../../Components/Section";
import { CardBlog } from "../../Components/CardBlog";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const Blogs = () => {
  return (
    <Box>
      <Container maxW="6xl">
        <SectionModel
          title="Tin tức"
          subTitle="Cập nhật tin tức mới nhất"
          path="/tin-tuc"
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
