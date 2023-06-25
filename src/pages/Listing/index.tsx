import { Center, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import { CardProduct } from "../../Components/CardProduct";
import { Layout } from "../../Layout";
import { Cat } from "./Cat";

interface IListing {
  cat?: string;
  title?: string;
}

export const Listing = (props: IListing) => {
  const { cat = "all", title = "Tất cả" } = props;

  console.log(cat, title);

  return (
    <Layout>
      <Container maxW="6xl" mt={{ base: "40px", md: "160px" }}>
        <Center>
          <Heading>{title}</Heading>
        </Center>

        <Grid
          gridTemplateColumns={{
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap="14px"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
            <GridItem key={number}>
              <CardProduct
                name="Son dưỡng ẩm"
                desc="Son dưỡng ẩm cho mọi loại môi nhạy cảm"
                imageURL="https://vuatocgia.com/medias/2022/12/layer-73-1-1536x1536.jpg.webp"
                isNew
                rating={3}
                price={350}
                numReviews={4}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Cat />
    </Layout>
  );
};
