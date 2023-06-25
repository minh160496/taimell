import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Button,
  Center,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Công ty</ListHeader>
            <Link href={"/gioi-thieu"}>Giới thiệu</Link>
            <Link href={"/tin-tuc"}>Tin tức</Link>
            <Link href={"#"}>Cẩn trọng</Link>
            <Link href={"/lien-he"}>Liên hệ</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Hỗ trợ</ListHeader>
            <Link href={"#"}>Trung tâm hỗ trợ</Link>
            <Link href={"#"}>Trung tâm an toàn</Link>
            <Link href={"#"}>Hướng dẫn sử dụng</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Chứng nhận</ListHeader>
            <Link href={"#"}>Chính sách bản quyền</Link>
            <Link href={"#"}>Chính sách bảo mật</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Kết nối</ListHeader>
            <Button
              as={Link}
              colorScheme="facebook"
              leftIcon={<FaFacebook />}
              href="https://www.facebook.com/"
            >
              <Center>
                <Text>Facebook</Text>
              </Center>
            </Button>
            <Button
              as={Link}
              variant={"outline"}
              leftIcon={<FcGoogle />}
              href="https://www.google.com/mail"
            >
              <Center>
                <Text>Google</Text>
              </Center>
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2023 Coppyright and design by Le Minh</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={
                "https://www.facebook.com/profile.php?id=100009988841813&mibextid=ZbWKwL"
              }
            >
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
