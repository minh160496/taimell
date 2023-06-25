import { Grid, GridProps } from "@chakra-ui/react";

interface ICartNum extends GridProps {
  n: number;
}

export const CartNum = (props: ICartNum) => {
  const { n, ...rest } = props;
  return (
    <Grid
      rounded="50%"
      pos="absolute"
      bg="pink.400"
      w="25px"
      h="25px"
      placeItems="center"
      {...rest}
      fontSize="sm"
      color="white"
    >
      {n}
    </Grid>
  );
};
