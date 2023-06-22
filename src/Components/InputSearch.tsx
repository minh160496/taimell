import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";

interface IInputSearch extends InputProps {
  colorIcon?: string;
  submit?: React.MouseEventHandler<HTMLButtonElement>;
}

export const InputSearch = (props: IInputSearch) => {
  const { value, colorIcon = "gray.600", onChange, submit, ...rest } = props;
  return (
    <InputGroup>
      <Input value={value} type="text" onChange={onChange} {...rest} />
      <InputRightElement>
        <Button
          onClick={submit}
          bg="transparent"
          color="gray.600"
          _hover={{ color: "gray.800" }}
        >
          <Icon as={FiSearch} w={5} h={5} color={colorIcon} />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
