import {
  ButtonProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  useDisclosure,
  Checkbox,
  CheckboxGroup,
  Stack,
  Heading,
  Button,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { Accordions } from "./Accordions";

export const Cat = (props: ButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [btn, setBtn] = useState(undefined);
  const btnRef = useRef();

  useEffect(() => {
    if (btnRef.current) setBtn(btnRef.current);
  }, []);

  return (
    <>
      <Tooltip label="Lọc sản phẩm" hasArrow placement="right" bg={"pink.500"}>
        <IconButton
          aria-label="danh-muc"
          ref={btn}
          onClick={onOpen}
          variant="outline"
          colorScheme="pink"
          pos="fixed"
          top="50%"
          transform="translate(0, -50%)"
          left={-2}
          px={5}
          py={7}
          {...props}
        >
          <Icon as={FaFilter} w={7} h={7} />
        </IconButton>
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="xs"
        onClose={onClose}
        finalFocusRef={btn}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="pink.300" color="white">
            Lựa chọn sản phẩm
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="30px">
              <Stack>
                <Heading size="md">Danh mục sản phẩm</Heading>
                <Stack>
                  <Checkbox defaultChecked colorScheme="pink">
                    Son dưỡng ẩm
                  </Checkbox>
                  <Checkbox colorScheme="pink">Son dưỡng ẩm</Checkbox>
                  <Checkbox colorScheme="pink">Son dưỡng ẩm</Checkbox>
                  <Checkbox colorScheme="pink">Son dưỡng ẩm</Checkbox>
                </Stack>
              </Stack>

              <Stack>
                <Heading size="md">Giá sản phẩm</Heading>
                <Stack>
                  <Checkbox defaultChecked colorScheme="pink">
                    Từ x đến y
                  </Checkbox>
                  <Checkbox colorScheme="pink">Từ x đến y</Checkbox>
                  <Checkbox colorScheme="pink">Từ x đến y</Checkbox>
                  <Checkbox colorScheme="pink">Từ x đến y</Checkbox>
                </Stack>
              </Stack>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <HStack w="full" onClick={onClose}>
              <Button colorScheme="gray" flex={1}>
                Hủy bỏ
              </Button>
              <Button colorScheme="pink" flex={1}>
                Áp dụng
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
