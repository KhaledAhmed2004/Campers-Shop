import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

import AboutUs from "./../pages/AboutUs/AboutUs";
import ProductManagementController from "./../pages/ProductManagement/ProductManagementController";
import UpdateProduct from "../pages/ProductManagement/UpdateProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import SuccessPage from "../pages/Checkout/SuccessPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/productManagement",
        element: <ProductManagementController />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },

      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
