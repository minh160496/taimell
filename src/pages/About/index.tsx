import { Center, Container, Heading } from "@chakra-ui/react";
import { Layout } from "../../Layout";

export const About = () => {
  return (
    <Layout>
      <Container maxW="6xl" h="70vh">
        <Center>
          <Heading
            size="xl"
            color="gray.700"
            mt={{ base: "40px", md: "160px" }}
          >
            Nội dung giới thiệu về công ty
          </Heading>
        </Center>
      </Container>
    </Layout>
  );
};
