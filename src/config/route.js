import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Stores from "../pages/Stores";

export const route = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/stores",
    component: Stores,
  },
  {
    path: "/about-us",
    component: AboutUs,
  },
];
