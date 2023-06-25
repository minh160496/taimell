import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { ButtonAddCart } from "../../Components/ButtonAddCart";
import { ButtonBuy } from "../../Components/ButtonBuy";
import { CardProduct } from "../../Components/CardProduct";
import { Layout } from "../../Layout";

export const ProductDetail = () => {
  return (
    <Layout>
      <Container maxW={"6xl"} mt={{ base: "80px", md: "48px" }}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={
                "https://cdn.shopify.com/s/files/1/0745/8989/6993/files/07-mai-ngo_leon.jpg?v=1686387614"
              }
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                Automatic Watch
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                $350.00 USD
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={"lg"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={"pink.400"}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{" "}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={"pink.400"}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Between lugs:
                    </Text>{" "}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Bracelet:
                    </Text>{" "}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case:
                    </Text>{" "}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case diameter:
                    </Text>{" "}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Dial color:
                    </Text>{" "}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Crystal:
                    </Text>{" "}
                    Domed, scratch‑resistant sapphire crystal with
                    anti‑reflective treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Water resistance:
                    </Text>{" "}
                    5 bar (50 metres / 167 feet){" "}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <HStack>
              <ButtonAddCart mt={8} />
              <ButtonBuy mt={8} />
            </HStack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Heading as="h2" marginTop="5">
          Sản phẩm có liên quan
        </Heading>
        <Divider marginTop="5" />
        <Grid
          gridTemplateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          rowGap="32px"
          columnGap="16px"
          mt="12px"
          mb="48px"
        >
          <GridItem>
            <CardProduct
              name="Tóc giả nam"
              desc="Tóc giả nam tốt nhất thị trường"
              isNew
              rating={4}
              numReviews={5}
              price={350}
              imageURL="https://cdn.shopify.com/s/files/1/0745/8989/6993/files/07-mai-ngo_leon.jpg?v=1686387614"
            />
          </GridItem>

          <GridItem>
            <CardProduct
              name="Tóc giả nam"
              desc="Tóc giả nam tốt nhất thị trường"
              isNew
              rating={4}
              numReviews={5}
              price={350}
              imageURL="https://cdn.shopify.com/s/files/1/0745/8989/6993/files/07-mai-ngo_leon.jpg?v=1686387614"
            />
          </GridItem>

          <GridItem>
            <CardProduct
              name="Tóc giả nam"
              desc="Tóc giả nam tốt nhất thị trường"
              isNew
              rating={4}
              numReviews={5}
              price={350}
              imageURL="https://cdn.shopify.com/s/files/1/0745/8989/6993/files/07-mai-ngo_leon.jpg?v=1686387614"
            />
          </GridItem>

          <GridItem>
            <CardProduct
              name="Tóc giả nam"
              desc="Tóc giả nam tốt nhất thị trường"
              isNew
              rating={4}
              numReviews={5}
              price={350}
              imageURL="https://cdn.shopify.com/s/files/1/0745/8989/6993/files/07-mai-ngo_leon.jpg?v=1686387614"
            />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
};
