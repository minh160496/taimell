import { Card, Center, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CardCat = () => {
  return (
    <Card
      as={Link}
      maxW="sm"
      rounded="xl"
      overflow="hidden"
      pos="relative"
      to="/cat"
    >
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        sizes="full"
        transition=".3s"
        _hover={{
          transform: "scale(1.3)",
        }}
      />

      <Center pos="absolute" bottom="10px" left={0} w="100%">
        <Heading size="md" color="gray.900">
          Son môi dưỡng ẩm
        </Heading>
      </Center>
    </Card>
  );
};
