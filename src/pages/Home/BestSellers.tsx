import { Box, Container, Stack } from "@chakra-ui/react";
import { TabProducts } from "../../Components/TabProduct";
import { CardProduct } from "../../Components/CardProduct";

export const BestSellers = () => {
  return (
    <Box>
      <Container maxW="6xl" as={Stack}>
        <TabProducts
          title="Best Seller"
          subTitle="the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here"
        >
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <Box px="10px">
              <CardProduct
                key={number}
                name="It is a long established fact that a reader will be distracted by"
                desc="the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here"
                imageURL="https://cdn.shopify.com/s/files/1/0745/8989/6993/files/07-mai-ngo_leon.jpg?v=1686387614"
                price={100}
                rating={4.5}
                numReviews={10}
                isNew={number % 2 === 0}
                href="/product-detail"
              />
            </Box>
          ))}
        </TabProducts>
      </Container>
    </Box>
  );
};
