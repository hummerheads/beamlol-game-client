import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Main from "./main/Main";
import Premium from "./pages/premium/Premium";
import Shop from "./pages/shop/Shop";
import Spin from "./pages/spin/Spin";
import Earn from "./pages/earn/Earn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "./provider/UserProvider";
import Level from "./pages/level/Level";
import Wallet from "./pages/wallet/Wallet";
import Referral from "./pages/referral/Referral";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { WalletProvider } from "./provider/WalletContext";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Premium", element: <Premium></Premium> },
      { path: "/shop", element: <Shop></Shop> },
      { path: "/earn", element: <Earn></Earn> },
      { path: "/referral", element: <Referral></Referral> },
      { path: "/spin", element: <Spin></Spin> },
      { path: "/boost", element: <Home></Home> },
      { path: "/leaderboard", element: <Home></Home> },
      { path: "/airdrop", element: <Home></Home> },
      { path: "/transactions", element: <Home></Home> },
      { path: "/level", element: <Level></Level> },
      { path: "/wallet", element: <Wallet></Wallet> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl="https://astounding-licorice-1ef290.netlify.app/tonconnect-manifest.json">
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <WalletProvider>
            <RouterProvider router={router} />
          </WalletProvider>
        </UserProvider>
      </QueryClientProvider>
    </TonConnectUIProvider>
  </StrictMode>
);
