import { Center, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Center w="full" h="full">
      <Spinner color="red.500" size={{ base: "md", lg: "xl" }} />
    </Center>
  );
};
