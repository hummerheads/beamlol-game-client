import { createContext, useState, useMemo, useContext, useEffect } from "react";
import { TonConnect } from "@tonconnect/sdk";
import PropTypes from "prop-types";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Initialize TonConnect with manifest URL and bridge URL
  const tonConnect = useMemo(() => {
    console.log("Initializing TonConnect SDK...");
    return new TonConnect({
      manifestUrl: "/tonconnect-manifest.json",
      bridgeUrl: "https://tonconnect.bridge.ton.org",
    });
  }, []);

  useEffect(() => {
    const handleStatusChange = (wallet) => {
      console.log("Status Change Event:", wallet);
      if (wallet && wallet.account) {
        setWalletAddress(wallet.account.address);
        setIsConnected(true);
        console.log("Wallet connected:", wallet.account.address);
      } else {
        setWalletAddress(null);
        setIsConnected(false);
        console.warn("Wallet disconnected or missing account information.");
      }
    };

    console.log("Subscribing to status changes...");
    const unsubscribe = tonConnect.onStatusChange(handleStatusChange);

    return () => {
      console.log("Unsubscribing from status changes...");
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [tonConnect]);

  const connectWallet = async () => {
    try {
      console.log("Opening wallet connection modal...");

      // Detect JS Bridge key if running inside a wallet browser
      const jsBridgeKey = window.ton?.jsBridgeKey;
      const isWalletBrowser = tonConnect.isWalletBrowser;
      console.log("JS Bridge Key:", jsBridgeKey, "Is Wallet Browser:", isWalletBrowser);

      if (jsBridgeKey && isWalletBrowser) {
        console.log("Using JS Bridge mode...");
        await tonConnect.connect({ jsBridgeKey });
      } else {
        console.log("Using HTTP Bridge mode...");
        await tonConnect.connect({
          universalLink: "https://tonhub.com/connect",
          bridgeUrl: "https://ton-connect-bridge.bgwapi.io/bridge",
        });
      }

      const wallet = tonConnect.wallet;
      console.log("Wallet object after connect:", wallet);

      if (wallet && wallet.account) {
        setWalletAddress(wallet.account.address);
        setIsConnected(true);
        console.log("Wallet connected successfully:", wallet.account.address);
      } else {
        console.error("Failed to retrieve wallet information.");
        alert("Failed to retrieve wallet information.");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert(`Connection failed: ${error.message}`);
    }
  };

  return (
    <WalletContext.Provider value={{ walletAddress, connectWallet, isConnected }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};

WalletProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
