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
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { TbSearch } from "react-icons/tb";
import { InputSearch } from "../../Components/InputSearch";
import { CartNum } from "./CartNum";
import { MotionHeader } from "./Motion";

export const Header = ({ isHomePage }: { isHomePage: boolean }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <MotionHeader isHomePage={isHomePage}>
      <Container maxW={"6xl"} as={Stack}>
        <Flex w="100%" minH={"60px"} align={"center"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} color="pink.700" />
                ) : (
                  <HamburgerIcon w={5} h={5} color="pink.700" />
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
            <Link to="/">
              <Image
                w={{ base: "180px", lg: "200px" }}
                src="/logo.png"
                alt="Logo"
                py={"12px"}
              />
            </Link>

            <Flex
              display={{ base: "none", md: "flex" }}
              ml={{ base: 2, xl: 10 }}
            >
              <DesktopNav linkColor="pink.800" linkHoverColor="pink.400" />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            align="center"
            direction={"row"}
            spacing={{ base: 2, lg: 6 }}
          >
            <InputHeaderDeskhop />
            <Link to="/gio-hang">
              <Flex pos="relative">
                <IconButton aria-label="cart" variant="link">
                  <Icon
                    as={RiShoppingCartLine}
                    w={{ base: "20px", md: "25px" }}
                    h={{ base: "20px", md: "25px" }}
                    color="pink.800"
                    _hover={{ color: "pink.400" }}
                    transition="all ease .4s"
                  />
                </IconButton>
                <CartNum n={0} top="-12px" left="25px" />
              </Flex>
            </Link>
            <Link to="/dang-nhap">
              <IconButton aria-label="cart" variant="link">
                <Icon
                  as={AiOutlineLogin}
                  w={{ base: "20px", md: "25px" }}
                  h={{ base: "20px", md: "25px" }}
                  color="pink.800"
                  _hover={{ color: "pink.400" }}
                  transition="all ease .4s"
                />
              </IconButton>
            </Link>
            <Link to="/thong-tin-nguoi-dung">
              <IconButton aria-label="user" variant="link">
                <Icon
                  as={AiOutlineUser}
                  w={{ base: "20px", md: "25px" }}
                  h={{ base: "20px", md: "25px" }}
                  color="pink.800"
                  _hover={{ color: "pink.400" }}
                  transition="all ease .4s"
                />
              </IconButton>
            </Link>
          </Stack>
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </MotionHeader>
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
            color="pink.800"
            w="25px"
            h="25px"
            _hover={{ color: "pink.400" }}
            transition="all ease .4s"
          />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent display={{ base: "none", md: "block" }}>
        <PopoverHeader color="pink.800">Search your product</PopoverHeader>
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
    <Stack direction={"row"} spacing={{ base: 3, lg: 8 }}>
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
          <NavLink to={navItem.href ?? "#"}>
            <Flex
              align="center"
              p={2}
              fontSize={{ base: "sm", lg: "md", xl: "xl" }}
              fontWeight={600}
              color={colorLink}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
              transition="color ease .2s"
            >
              <Text>{navItem.label}</Text>
              {navItem.children && (
                <Icon as={ChevronDownIcon} color="inherit" w={6} h={6} />
              )}
            </Flex>
          </NavLink>
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
    <Link to={href ? href : "#"}>
      <Box
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
      </Box>
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
      <InputSearch placeholder="Search your hair" mb={6} />
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
      <Link to={href || "#"}>
        <Flex
          py={2}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("pink.700", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              color="pink.700"
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </Link>

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
              <Link
                key={child.label}
                to={child.href || "#"}
                style={{ display: "block", width: "100%" }}
              >
                <Text py={2} fontSize="md" fontWeight={500} color="pink.500">
                  {child.label}
                </Text>
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
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Giới thiệu",
    href: "/gioi-thieu",
  },
  {
    label: "Menu",
    children: [
      {
        label: "Tất cả sản phẩm",
        subLabel: "Trending Design to inspire you",
        href: "/danh-sach-san-pham",
      },
      {
        label: "Sữa rửa mặt",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Tin tức",
    href: "/tin-tuc",
  },
  {
    label: "Liên hệ",
    href: "/lien-he",
  },
];
