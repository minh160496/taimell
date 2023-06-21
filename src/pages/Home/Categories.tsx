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
                imageURL="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
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
