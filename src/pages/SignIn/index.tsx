import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Layout";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <Container maxW="6xl" mt={{ base: "36px", md: "70px" }}>
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Đăng ký
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool features ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? "text" : "password"} />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button loadingText="Submitting" size="lg" colorScheme="pink">
                    Đăng ký
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Bạn đã có tài khoản?{" "}
                    <Link style={{ color: "blue" }} to="/dang-nhap">
                      Đăng nhập
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Layout>
  );
};
