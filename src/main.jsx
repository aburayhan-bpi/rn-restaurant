import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Foods from "./components/Foods/Foods.jsx";
import Errorpage from "./components/Errorpage/Errorpage.jsx";
import ShowDetails from "./components/ShowDetails/ShowDetails.jsx";
import FoodByCategory from "./components/FoodByCategory/FoodByCategory.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/foods",
        loader: () =>
          fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Seafood"),
        element: <Foods></Foods>,
      },
      {
        path: "/food/:foodId",
        loader: ({ params }) =>
          fetch(
            `https://themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`
          ),
        element: <ShowDetails></ShowDetails>,
      },
      {
        path: "/ctgfood/:cfood",
        loader: ({ params }) =>
          fetch(
            `https://themealdb.com/api/json/v1/1/filter.php?c=${params.cfood}`
          ),
        element: <FoodByCategory></FoodByCategory>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </StrictMode>
);
