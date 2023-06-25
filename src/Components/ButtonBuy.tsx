import { Button, ButtonProps } from "@chakra-ui/react";

export const ButtonBuy = (props: ButtonProps) => {
  return (
    <Button
      w={"full"}
      size={"lg"}
      py={"7"}
      colorScheme="pink"
      _hover={{
        transform: "translateY(2px)",
        boxShadow: "lg",
      }}
      {...props}
    >
      Buy now
    </Button>
  );
};
