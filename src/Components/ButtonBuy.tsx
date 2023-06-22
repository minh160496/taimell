import { Button, ButtonProps } from "@chakra-ui/react";

export const ButtonBuy = (props: ButtonProps) => {
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
      Buy now
    </Button>
  );
};
