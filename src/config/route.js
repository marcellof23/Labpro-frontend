import Home from "../pages/Home";
import AddProducts from "../pages/AddProducts";
import Stores from "../pages/Stores";
import AddStores from "../pages/AddStores";
import EditStores from "../pages/EditStores";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
export const route = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/products/add/:id/:nama",
    component: AddProducts,
  },
  {
    path: "/stores",
    exact: true,
    component: Stores,
  },
  {
    path: "/stores/add",
    component: AddStores,
  },
  {
    path: "/stores/edit/:id",
    component: EditStores,
  },
  {
    path: "/about-us",
    component: AboutUs,
  },
  {
    path: "*",
    component: NotFound,
  },
];
