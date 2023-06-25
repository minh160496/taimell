import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CartItem } from "../../Components/CartItem";
import { Price, formatPrice } from "../../Components/PriceTag";

export const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

export const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

const cartData = [
  {
    id: "1",
    price: 39.99,
    currency: "GBP",
    name: "Ferragamo bag",
    description: "Tan, 40mm",
    quantity: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "2",
    price: 39.99,
    currency: "GBP",
    name: "Bamboo Tan",
    description: "Tan, 40mm",
    quantity: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: "3",
    price: 39.99,
    currency: "GBP",
    name: "Yeezy Sneakers",
    description: "Tan, 40mm",
    quantity: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
  },
];

const ItemOrder = () => {
  return (
    <Stack spacing={{ base: "8", md: "10" }} flex="2">
      <Heading fontSize="2xl" fontWeight="extrabold">
        Đơn hàng
      </Heading>

      <Stack spacing="6">
        {cartData.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            removeItem={false}
            changeQuantity={false}
            isGiftWrapping={false}
          />
        ))}
      </Stack>
    </Stack>
  );
};

const Discount = () => {
  return (
    <HStack spacing="8px">
      <Input placeholder="Nhập mã giảm giá" />
      <Button colorScheme="green">Áp dụng</Button>
    </HStack>
  );
};

const Bill = () => {
  return (
    <Box>
      <Flex align="center" justify="space-between">
        <Text>Giá sản phẩm</Text>
        <Price>{formatPrice(500, { currency: "VND" })}</Price>
      </Flex>

      <Flex align="center" justify="space-between">
        <Text>Chi phí vận chuyển</Text>
        <Price>{formatPrice(500, { currency: "VND" })}</Price>
      </Flex>

      <Flex align="center" justify="space-between" mb="8px">
        <Text>Giảm giá</Text>
        <Price>{formatPrice(500, { currency: "VND" })}</Price>
      </Flex>

      <Divider />

      <Flex align="center" justify="space-between" mt="8px">
        <Text>Tổng tiền</Text>
        <Price>{formatPrice(1000, { currency: "VND" })}</Price>
      </Flex>
    </Box>
  );
};

const Order = () => {
  return (
    <Box>
      <Box mb="32px">
        <ItemOrder />
      </Box>
      <Divider />
      <Box mt="32px">
        <Discount />
      </Box>
      <Divider />
      <Box mt="32px">
        <Bill />
      </Box>
    </Box>
  );
};

export const Form3 = () => {
  return <Order />;
};
