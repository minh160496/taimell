import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Layout } from "../../Layout";

export const LogIn = () => {
  return (
    <Layout>
      <Container maxW="6xl">
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack>
                  <Text align={"center"}>
                    Bạn chưa có tài khoản?{" "}
                    <Link style={{ color: "blue" }} to="/dang-ky">
                      Đăng ký
                    </Link>
                  </Text>
                </Stack>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Stack>
                  <Button colorScheme="pink" color={"white"}>
                    Đăng nhập
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Layout>
  );
};
