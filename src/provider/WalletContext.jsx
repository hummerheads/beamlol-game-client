// // src/provider/WalletContext.jsx
// import { createContext, useContext, useState, useEffect, useMemo } from "react";
// import { TonConnect } from "@tonconnect/sdk";

// const WalletContext = createContext();

// export const WalletProvider = ({ children }) => {
//   const [walletAddress, setWalletAddress] = useState(null);
//   const tonConnect = useMemo(() => new TonConnect({ manifestUrl: "/tonconnect-manifest.json" }), []);

//   const connectWallet = async () => {
//     try {
//       await tonConnect.connect({
//         universalLink: "https://tonhub.com/connect",
//         bridgeUrl: "https://bridge.tonapi.io/bridge",
//       });

//       // Listen for wallet connection status change
//       tonConnect.onStatusChange(async (wallet) => {
//         if (wallet) {
//           const walletInfo = await tonConnect.getWallet();
//           setWalletAddress(walletInfo.account.address);
//           console.log("Wallet connected:", walletInfo.account.address);
//         } else {
//           console.log("Wallet disconnected");
//           setWalletAddress(null);
//         }
//       });
//     } catch (error) {
//       console.error("Error connecting wallet:", error);
//     }
//   };

//   useEffect(() => {
//     // Cleanup event listener on component unmount
//     return () => {
//       tonConnect.offStatusChange();
//     };
//   }, [tonConnect]);

//   return (
//     <WalletContext.Provider value={{ walletAddress, connectWallet, tonConnect }}>
//       {children}
//     </WalletContext.Provider>
//   );
// };

// export const useWallet = () => useContext(WalletContext);
