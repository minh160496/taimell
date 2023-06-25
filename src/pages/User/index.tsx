import {
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Layout } from "../../Layout";

export const UserInf = () => {
  return (
    <Layout>
      <Container maxW="6xl" mt={{ base: "120px", md: "160px" }}>
        <Stack spacing="36px">
          <Heading size="xl">Thông tin người dùng</Heading>
          <Stack spacing="12px">
            <HStack spacing="32px">
              <Text fontSize="xl">Họ và tên</Text>
              <Text fontSize="xl" color="blue.600">
                Lê Văn minh
              </Text>
            </HStack>

            <HStack spacing="32px">
              <Text fontSize="xl">Địa chỉ email</Text>
              <Text fontSize="xl" color="blue.600">
                Leminh16041996@gmail.com
              </Text>
            </HStack>

            <HStack spacing="32px">
              <Text fontSize="xl">Xếp hạng thành viên</Text>
              <Text fontSize="xl" color="blue.600">
                Vàng
              </Text>
            </HStack>

            <HStack spacing="32px">
              <Text fontSize="xl">Số lượng đơn hàng</Text>
              <Text fontSize="xl" color="blue.600">
                32 đơn
              </Text>
            </HStack>

            <VStack spacing="32px" mt="36px">
              <Button variant="link" colorScheme="pink">
                Xem lịch sử đơn hàng
              </Button>
              <Button colorScheme="orange" variant="outline" px="22px">
                Đăng xuất
              </Button>
            </VStack>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
};
