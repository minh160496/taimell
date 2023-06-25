import { Checkout } from "./../pages/Checkout";
import { About } from "../pages/About";
import { Blogs } from "../pages/Blogs";
import { Cart } from "../pages/Cart";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Listing } from "../pages/Listing";
import { LogIn } from "../pages/Login";
import { ProductDetail } from "../pages/ProductDetail";
import { SignIn } from "../pages/SignIn";
import { UserInf } from "../pages/User";
import { BlogDetail } from "../pages/Blogs/BLogDetail";

export const pathObj = {
  about: {
    title: "Giới thiệu",
    path: "/gioi-thieu",
  },
  listing: {
    title: "Menu",
    path: "/danh-sach-san-pham",
  },
  blogs: {
    title: "Tin tức",
    path: "/tin-tuc",
  },
  blogDetail: {
    title: "Chi tiet bai viet",
    path: "/chi-tiet-bai-viet",
  },
  contact: {
    title: "Lien he",
    path: "/lien-he",
  },
  productDetail: {
    title: "Chi tiet",
    path: "/chi-tiet",
  },
  cart: {
    title: "gio-hang",
    path: "/gio-hang",
  },
  logIn: {
    title: "dang nhap",
    path: "/dang-nhap",
  },
  signIn: {
    title: "dang ky",
    path: "/dang-ky",
  },
  checkout: {
    title: "check out",
    path: "/check-out",
  },
  user: {
    title: "Thông tin người dùng",
    path: "/thong-tin-nguoi-dung",
  },
};

export const routers = [
  {
    path: "/",
    element: Home,
  },
  {
    path: pathObj.listing.path,
    element: Listing,
  },
  {
    path: pathObj.about.path,
    element: About,
  },
  {
    path: pathObj.contact.path,
    element: Contact,
  },
  {
    path: pathObj.blogs.path,
    element: Blogs,
  },
  {
    path: pathObj.productDetail.path,
    element: ProductDetail,
  },
  {
    path: pathObj.cart.path,
    element: Cart,
  },
  {
    path: pathObj.logIn.path,
    element: LogIn,
  },
  {
    path: pathObj.signIn.path,
    element: SignIn,
  },
  {
    path: pathObj.checkout.path,
    element: Checkout,
  },
  {
    path: pathObj.user.path,
    element: UserInf,
  },
  {
    path: pathObj.blogDetail.path,
    element: BlogDetail,
  },
];
