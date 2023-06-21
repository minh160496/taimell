import { FaArrowUp } from "react-icons/fa";
import { Center, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const BackTop = () => {
  const [isShow, setIsShow] = useState(false);
  const handleFadeTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {isShow && (
        <Center
          onClick={handleFadeTop}
          pos="fixed"
          bottom="50px"
          right="40px"
          cursor="pointer"
          w="70px"
          h="70px"
          rounded="50%"
          bg="pink.200"
        >
          <Icon as={FaArrowUp} fill="white" width={25} height={25} />
        </Center>
      )}
    </>
  );
};
