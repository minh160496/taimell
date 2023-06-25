import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

interface IAccordions {
  label: React.ReactNode;
  children?: React.ReactNode;
  hover?: { color: string };
}

export const Accordions = (props: IAccordions) => {
  const { label, children, hover } = props;
  return (
    <Accordion defaultIndex={[0]} allowMultiple pl="5px">
      <AccordionItem border="none" w="100%">
        <h2>
          <AccordionButton
            _hover={{ background: "transparent", ...hover }}
            px={0}
          >
            <Box as="span" flex="1" textAlign="left">
              {label}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel px={0} pl="5px">
          {children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
