import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Products from "../pages/products/Products";
import About from "../pages/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/sobre-nos",
        element: <About />,
      },
    ],
  },
]);
export default router;
