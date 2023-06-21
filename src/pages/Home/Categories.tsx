import { Box, Container, Stack } from "@chakra-ui/react";
import { TabProducts } from "../../Components/TabProduct";
import { CardProduct } from "../../Components/CardProduct";

export const Categories = () => {
  return (
    <Box>
      <Container maxW="6xl" as={Stack}>
        <TabProducts
          title="Categories"
          subTitle="eorferjf  feogfjer e foew fowe  òehweo"
        >
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <CardProduct
              name="abc"
              imageURL="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"
              price={100}
              rating={4.5}
              numReviews={10}
              isNew={number % 2 === 0}
            />
          ))}
        </TabProducts>
      </Container>
    </Box>
  );
};
