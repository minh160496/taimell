import {
  Badge,
  Box,
  Circle,
  Flex,
  Icon,
  Image,
  Tooltip,
  chakra,
  useColorModeValue,
  Card,
  CardBody,
  Stack,
  CardFooter,
  ButtonGroup,
  Text,
  Heading,
  Button,
  Divider,
  VStack,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import styled from "@emotion/styled";

interface RatingProps {
  rating: number;
  numReviews: number;
}

const Rating = ({ rating, numReviews }: RatingProps) => {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "#F6E05E" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf
                key={i}
                style={{ marginLeft: "1", color: "#F6E05E" }}
              />
            );
          }
          return (
            <BsStar key={i} style={{ marginLeft: "1", color: "#F6E05E" }} />
          );
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
};

interface ICardProduct {
  isNew: boolean;
  imageURL: string;
  name: string;
  desc: string;
  price: number;
  rating: number;
  numReviews: number;
  href?: string;
}

export const CardProduct = (props: ICardProduct) => {
  const {
    imageURL = "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    isNew = true,
    name = "Name product",
    price = 4.5,
    rating = 4.5,
    numReviews = 40,
    desc,
    href = "#",
  } = props;

  return (
    <LinkBox
      as={Card}
      maxW={{ lg: "450px" }}
      transition="0.5s"
      _hover={{ transform: "translateY(-10px)" }}
      cursor="pointer"
    >
      <CardBody>
        <LinkOverlay href={href}>
          <Image src={imageURL} alt={name} borderRadius="lg" />
        </LinkOverlay>
        <Stack mt="6" spacing="3">
          <StyledHeading size="md">{name}</StyledHeading>
          <Text>{desc}</Text>
          <Text color="blue.600" fontSize="2xl">
            {price}$
          </Text>
          <Rating rating={4.5} numReviews={10} />
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup
          spacing="2"
          as={Flex}
          justifyContent="space-between"
          w="100%"
        >
          <Button variant="solid" colorScheme="pink" flex={1}>
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue" flex={1}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </LinkBox>
  );
};

const StyledHeading = styled(Heading)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
