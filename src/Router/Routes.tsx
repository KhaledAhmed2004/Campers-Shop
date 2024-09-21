import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AboutUs from "./../pages/AboutUs/AboutUs";
import ProductManagementController from "./../pages/ProductManagement/ProductManagementController";
import UpdateProduct from "../pages/ProductManagement/UpdateProduct";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import SuccessPage from "../pages/Checkout/SuccessPage";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/productManagement",
        element: <ProductManagementController />,
      },
      {
        path: "products/:id",
        element: <ProductDetailsPage />,
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
