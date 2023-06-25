import { Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Layout } from "../../Layout";

export const BlogDetail = () => {
  return (
    <Layout>
      <Container maxW="6xl" mt={{ base: "60px", md: "160px" }} mb="46px">
        <Stack spacing="32px">
          <Stack>
            <Heading>Tiêu đề bài viết</Heading>
            <Text>Mô tả ngắn ngọ nội dung bài viết</Text>
          </Stack>
          <Stack>
            <Image
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              alt="bai-viet"
            />
            <Text>Nội dung bài viết</Text>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
};
