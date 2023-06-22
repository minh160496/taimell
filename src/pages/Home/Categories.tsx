import { Box, Container, Stack } from "@chakra-ui/react";
import { TabProducts } from "../../Components/TabProduct";
import { CardProduct } from "../../Components/CardProduct";

export const Categories = () => {
  return (
    <Box>
      <Container maxW="6xl" as={Stack}>
        <TabProducts
          title="Categories"
          subTitle="the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that"
        >
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <Box px="10px">
              <CardProduct
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                key={number}
                name="Lorem Ipsum is simply dummy text of the printing and"
                imageURL="https://cdn.shopify.com/s/files/1/0745/8989/6993/files/01-side-part-7-3_leon.jpg?v=1686387208"
                price={100}
                rating={4.5}
                numReviews={10}
                isNew={number % 2 === 0}
              />
            </Box>
          ))}
        </TabProducts>
      </Container>
    </Box>
  );
};
