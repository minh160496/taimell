import { About } from "../pages/About";
import { Blogs } from "../pages/Blog";
import { Contact } from "../pages/Contact/Contact";
import { Home } from "../pages/Home";
import { Listing } from "../pages/Listing";

export const pathObj = {
  about: {
    title: "Giới thiệu",
    path: "/about",
  },
  listing: {
    title: "Menu",
    path: "/listing",
  },
  blogs: {
    title: "Tin tức",
    path: "/blogs",
  },
  contact: {
    title: "Liên hệ",
    path: "/contact",
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
];
