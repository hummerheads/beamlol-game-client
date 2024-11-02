import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home/Home"
import Main from "./main/Main";
import Premium from "./pages/premium/Premium";
import Shop from "./pages/shop/Shop";
import Spin from "./pages/spin/Spin";
import Earn from "./pages/earn/Earn";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
       },
       {
        path: "/Premium",
        element: <Premium></Premium>,
       },
       {
        path: "/shop",
        element: <Shop></Shop>,
       },
       {
        path: "/earn",
        element: <Earn></Earn>,
       },
       {
        path: "/invite",
        element: <Home></Home>,
       },
       {
        path: "/wallet",
        element: <Home></Home>,
       },
       {
        path: "/spin",
        element: <Spin></Spin>,
       },
       {
        path: "/boost",
        element: <Home></Home>,
       },
       {
        path: "/leaderboard",
        element: <Home></Home>,
       },
       {
        path: "/airdrop",
        element: <Home></Home>,
       },
       {
        path: "/transactions",
        element: <Home></Home>,
       },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
