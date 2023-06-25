import { Box, Container, Stack } from "@chakra-ui/react";
import { SectionModel } from "../../Components/Section";
import { CardProduct } from "../../Components/CardProduct";

export const BestSellers = () => {
  return (
    <Container maxW="6xl" as={Stack}>
      <SectionModel
        title="Best Seller"
        subTitle="the readable content of a page when looking at its layout. The point of using Lorem Ipsum is"
        path="/danh-sach-san-pham"
      >
        {[1, 2, 3, 4, 5, 6].map((number) => (
          <Box px="10px" py="12px" key={number}>
            <CardProduct
              key={number}
              name="It is a long established fact that"
              desc="the readable content of a page when looking at its layout"
              imageURL="https://cdn.shopify.com/s/files/1/0745/8989/6993/files/07-mai-ngo_leon.jpg?v=1686387614"
              price={100}
              rating={4.5}
              numReviews={10}
              isNew={number % 2 === 0}
              href="/chi-tiet"
            />
          </Box>
        ))}
      </SectionModel>
    </Container>
  );
};
