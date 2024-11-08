import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useWallet } from "../../provider/WalletContext";
import axios from "axios";
import { TonConnectButton, useTonAddress, useTonWallet } from "@tonconnect/ui-react";


const Wallet = () => {
  const { connectWallet, walletAddress } = useWallet();
  const tonAddress = useTonAddress();
  const wallet = useTonWallet();


  const handleConnectWallet = async () => {
    try {
      await connectWallet();
      if (walletAddress) {
        // Save wallet address to the backend
        await axios.post("https://beamlol-server.onrender.com/allusers", {
          telegram_ID: walletAddress,
        });
        alert("Wallet connected and saved successfully!");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Failed to connect wallet");
    }
  };

  return (
    <div
      className="bg-[url('/referral/bg.png')] py-5"
      style={{ height: "calc(100vh - 124px)", overflow: "auto" }}
    >
       <div className="mx-16">
        <h1 className="text-white text-center text-2xl font-black">
          Get real crypto.
          <br />
          Earn and buy any tokens
        </h1>
      </div>
      <div
        className="text-white mt-4 w-1/2 mx-auto text-center p-4 font-bold rounded-[20px] border-[2.3px] border-white/[.53] bg-gradient-to-r from-[#856220] to-[#F1EA82] shadow-lg"
        onClick={handleConnectWallet}
      >
        {walletAddress ? "Wallet Connected" : "Connect Wallet"}
      </div>
      <div className="mx-auto">
        <Tabs
          aria-label="Default tabs"
          variant="default"
          className="mx-auto my-2"
        >
          <Tabs.Item active title="Balances" icon={HiUserCircle}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Profile tab&apos;s associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
          <Tabs.Item title="History" icon={MdDashboard}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard tab&apos;s associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
        </Tabs>
        <div className="wallet-container">
      <h1>Connect Your TON Wallet</h1>
      <TonConnectButton className="my-connect-button" />
      {wallet ? (
        <div>
          <p>Connected Wallet: {wallet.name}</p>
          <p>Wallet Address: {tonAddress}</p>
        </div>
      ) : (
        <p>No wallet connected</p>
      )}
    </div>
      </div>
    </div>
  );
};

export default Wallet;
