import { FaArrowUp } from "react-icons/fa";
import { Center, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const BackTop = () => {
  const [isShow, setIsShow] = useState(false);
  const handleFadeTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          bg="pink.400"
          transition=".3s"
          _hover={{ backgroundColor: "pink.500" }}
        >
          <Icon as={FaArrowUp} fill="white" width={25} height={25} />
        </Center>
      )}
    </>
  );
};
