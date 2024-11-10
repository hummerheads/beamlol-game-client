import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { TonConnectButton, useTonAddress, useTonWallet } from "@tonconnect/ui-react";

const Wallet = () => {
  const tonAddress = useTonAddress();
  const wallet = useTonWallet();

  // Memoize handleConnectWallet to prevent re-creation on each render


  return (
    <div
      className="bg-[url('/wallet/bg.png')] py-10"
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

        <div className="wallet-container text-center bg-white bg-opacity-10 rounded-lg p-10 shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
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
            <p className="text-white">No wallet connected</p>
          )}
        </div>

        <div className="tabs-container my-10">
          <Tabs
            aria-label="Wallet Tabs"
            variant="pills"
            className="max-w-lg mx-auto bg-white bg-opacity-10 rounded-lg shadow-md p-4"
          >
            <Tabs.Item active title="Balances" icon={HiUserCircle}>
              <div className="text-white">
                <p className="font-medium text-lg mb-2">Your Balances</p>
                <p>
                  View your current balances and manage your crypto assets
                  effortlessly.
                </p>
              </div>
            </Tabs.Item>
            <Tabs.Item title="History" icon={MdDashboard}>
              <div className="text-white">
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
