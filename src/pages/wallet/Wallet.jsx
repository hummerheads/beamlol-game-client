import { useCallback, useEffect } from "react";
import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useWallet } from "../../provider/WalletContext";
import axios from "axios";
import { TonConnectButton, useTonAddress, useTonWallet } from "@tonconnect/ui-react";

const Wallet = () => {
  const { walletAddress, isConnected } = useWallet();
  const tonAddress = useTonAddress();
  const wallet = useTonWallet();

  // Memoize handleConnectWallet to prevent re-creation on each render
  const handleConnectWallet = useCallback(async () => {
    try {
      if (walletAddress && tonAddress) {
        // After successful connection, check and store in backend
        const response = await axios.post("https://beamlol-server.onrender.com/allusers", {
          telegram_ID: walletAddress,
          ton_address: tonAddress,
        });

        if (response.data.insertedId) {
          alert("Wallet connected and saved successfully!");
        } else {
          alert("Wallet already connected.");
        }
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Failed to connect wallet");
    }
  }, [walletAddress, tonAddress]); // Only re-create if walletAddress or tonAddress changes

  // Trigger handleConnectWallet when the wallet is connected
  useEffect(() => {
    if (isConnected) {
      handleConnectWallet();
    }
  }, [isConnected, handleConnectWallet]); // Add handleConnectWallet to dependencies

  return (
    <div
      className="bg-[url('/referral/bg.png')] py-10"
      style={{ height: "calc(100vh - 124px)", overflow: "auto" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-white text-4xl font-extrabold mb-6">
            Earn Real Crypto
          </h1>
          <p className="text-white text-lg mb-10">
            Connect your wallet, earn, and buy any tokens seamlessly.
          </p>
        </div>

        <div className="wallet-container text-center bg-white rounded-lg p-10 shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Connect Your TON Wallet
          </h2>
          <TonConnectButton className="my-connect-button mx-auto my-4" />
          {wallet ? (
            <div className="mt-6">
              <p className="text-gray-800 font-semibold">
                Connected Wallet: {wallet.name}
              </p>
              <p className="text-gray-600">Wallet Address: {tonAddress}</p>
            </div>
          ) : (
            <p className="text-gray-500">No wallet connected</p>
          )}
        </div>

        <div className="tabs-container my-10">
          <Tabs
            aria-label="Wallet Tabs"
            variant="pills"
            className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-4"
          >
            <Tabs.Item active title="Balances" icon={HiUserCircle}>
              <div className="text-gray-800 dark:text-gray-300">
                <p className="font-medium text-lg mb-2">Your Balances</p>
                <p>
                  View your current balances and manage your crypto assets
                  effortlessly.
                </p>
              </div>
            </Tabs.Item>
            <Tabs.Item title="History" icon={MdDashboard}>
              <div className="text-gray-800 dark:text-gray-300">
                <p className="font-medium text-lg mb-2">Transaction History</p>
                <p>
                  Review your transaction history and track your earnings and
                  expenses.
                </p>
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
