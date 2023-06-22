import { Button, ButtonProps } from "@chakra-ui/react";

export const ButtonAddCart = (props: ButtonProps) => {
  return (
    <Button
      rounded={"none"}
      w={"full"}
      mt={8}
      size={"lg"}
      py={"7"}
      colorScheme="pink"
      {...props}
    >
      Add to cart
    </Button>
  );
};
