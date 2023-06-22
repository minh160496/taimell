import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Container,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { TbSearch } from "react-icons/tb";
import { InputSearch } from "../../Components/InputSearch";
import { useWindowScroll } from "../../hooks/useWindow";

export const Header = ({ isHomePage }: { isHomePage: boolean }) => {
  const { isOpen, onToggle } = useDisclosure();

  const { scrollTop } = useWindowScroll();

  console.log(scrollTop);

  return (
    <Box
      color={isHomePage ? "whiteAlpha.600" : "current"}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={isHomePage && scrollTop < 100 ? "transparent" : "gray.300"}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={3}
      bg={isHomePage && scrollTop < 100 ? "transparent" : "#fff"}
      transition="all ease .4s"
    >
      <Container maxW={"6xl"} as={Stack}>
        <Flex w="100%" minH={"60px"} py={{ base: 2 }} align={"center"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            align="center"
          >
            <Link href="/">
              <Image
                w="100px"
                src="https://cdn.shopify.com/s/files/1/0745/8989/6993/files/logo.svg?v=1683175180&width=200"
                alt="Logo"
              />
            </Link>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav
                linkColor={isHomePage && scrollTop < 100 ? "white" : "gray.700"}
                linkHoverColor={"pink.400"}
              />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <InputHeaderDeskhop />
            <IconButton aria-label="cart" variant="link">
              <Icon
                as={RiShoppingCartLine}
                w="25px"
                h="25px"
                color="pink.400"
                _hover={{ color: "pink.300" }}
              />
            </IconButton>
            <IconButton aria-label="cart" variant="link">
              <Icon
                as={AiOutlineLogin}
                w="25px"
                h="25px"
                color="pink.400"
                _hover={{ color: "pink.300" }}
              />
            </IconButton>
            <IconButton aria-label="cart" variant="link">
              <Icon
                as={AiOutlineUser}
                w="30px"
                h="30px"
                color="pink.400"
                _hover={{ color: "pink.300" }}
              />
            </IconButton>
          </Stack>
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const InputHeaderDeskhop = () => {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <IconButton
          aria-label="Search"
          variant="link"
          display={{ base: "none", md: "block" }}
        >
          <Icon
            as={TbSearch}
            color="pink.400"
            w="25px"
            h="25px"
            _hover={{ color: "pink.300" }}
          />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent display={{ base: "none", md: "block" }}>
        <PopoverHeader color="pink.400">Search your product</PopoverHeader>
        <PopoverBody>
          <Box display={{ base: "none", md: "block" }}>
            <InputSearch color="gray.600" />
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const DesktopNav = ({
  linkColor,
  linkHoverColor,
}: {
  linkColor: string;
  linkHoverColor: string;
}) => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <DeskhopNavItem
          key={navItem.label}
          navItem={navItem}
          linkColor={linkColor}
          linkHoverColor={linkHoverColor}
        />
      ))}
    </Stack>
  );
};

const DeskhopNavItem = ({
  navItem,
  linkColor,
  linkHoverColor,
}: {
  navItem: NavItem;
  linkColor: string;
  linkHoverColor: string;
}) => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const [colorLink, setColorLink] = useState(linkColor);

  useEffect(() => {
    setColorLink(linkColor);
  }, [linkColor]);

  return (
    <Box>
      <Popover
        trigger={"hover"}
        placement={"bottom-start"}
        onOpen={() => setColorLink(linkHoverColor)}
        onClose={() => setColorLink(linkColor)}
      >
        <PopoverTrigger>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"lg"}
            fontWeight={600}
            color={colorLink}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            <Flex align="center">
              <Text>{navItem.label}</Text>
              {navItem.children && (
                <Icon as={ChevronDownIcon} color="inherit" w={6} h={6} />
              )}
            </Flex>
          </Link>
        </PopoverTrigger>

        {navItem.children && (
          <PopoverContent
            border={0}
            boxShadow={"xl"}
            bg={popoverContentBgColor}
            p={4}
            rounded={"xl"}
            minW={"sm"}
          >
            <Stack>
              {navItem.children.map((child) => (
                <DesktopSubNav key={child.label} {...child} />
              ))}
            </Stack>
          </PopoverContent>
        )}
      </Popover>
    </Box>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            color="gray.700"
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"} color="gray.400">
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <InputSearch placeholder="Search your hair" />
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color="gray.600"
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href} color="gray.500">
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Menu",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];
