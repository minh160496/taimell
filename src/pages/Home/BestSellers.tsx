import { Box, Container, Stack } from "@chakra-ui/react";
import { TabProducts } from "../../Components/TabProduct";
import { CardProduct } from "../../Components/CardProduct";

export const BestSellers = () => {
  return (
    <Box>
      <Container maxW="8xl" as={Stack}>
        <TabProducts
          title="Best Seller"
          subTitle="the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here"
        >
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <CardProduct
              key={number}
              name="It is a long established fact that a reader will be distracted by"
              desc="the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here"
              imageURL="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"
              price={100}
              rating={4.5}
              numReviews={10}
              isNew={number % 2 === 0}
              href="/product-detail"
            />
          ))}
        </TabProducts>
      </Container>
    </Box>
  );
};
