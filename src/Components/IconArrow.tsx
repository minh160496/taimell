import { Icon, IconButton, IconButtonProps } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface IIconArrow extends IconButtonProps {
  action: string;
}

export const IconArrow = (props: IIconArrow) => {
  const { action, w = "50px", h = "50px", ...rest } = props;
  return (
    <IconButton
      bg="transparent"
      _hover={{ background: "transparent" }}
      borderRadius="full"
      position="absolute"
      transform={"translate(0%, -50%)"}
      zIndex={2}
      {...rest}
    >
      <Icon
        as={action === "next" ? BsChevronRight : BsChevronLeft}
        w={w}
        h={h}
        color="pink.400"
        _hover={{ color: "pink.300" }}
      />
    </IconButton>
  );
};
