import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { TonConnectButton, useTonAddress, useTonWallet } from "@tonconnect/ui-react";
import Payment from "../../components/Payment";
const Wallet = () => {
  const tonAddress = useTonAddress();
  const wallet = useTonWallet();

  return (
    <div
      className="bg-[url('/wallet/bg1.webp')] bg-cover bg-center py-10 font-heading-aldrich"
      style={{ height: "calc(100vh - 132px)", overflow: "auto" }}
    >
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-white text-4xl font-extrabold mb-4">
            Earn <span className="text-yellow-400">Real Crypto</span> 
          </h1>
          <p className="text-white text-lg font-light">
            Connect your wallet, earn, and seamlessly buy tokens.
          </p>
        </div>

        {/* Wallet Connection Section */}
        <div className="wallet-container bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 shadow-xl max-w-md mx-auto mb-12 border border-white border-opacity-20">
          <h2 className="text-xl font-bold text-white mb-6">
            Connect Your <span className="text-yellow-400">TON Wallet</span> 
          </h2>
          <TonConnectButton className="my-connect-button mx-auto my-4 transition duration-300 transform hover:scale-105" />
          {wallet ? (
            <div className="mt-6 text-white">
              <p className="font-semibold text-lg">
                Connected Wallet: <span className="text-yellow-300">{wallet.name}</span>
              </p>
              <p className="text-sm mt-2">Wallet Address: <span className="text-gray-300">{tonAddress}</span></p>
            </div>
          ) : (
            <p className="text-gray-300 mt-4">No wallet connected</p>
          )}
        </div>
        <Payment></Payment>

        {/* Tabs Section */}
        <div className="tabs-container bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg max-w-lg mx-auto p-6 border border-white border-opacity-20">
          <Tabs
            aria-label="Wallet Tabs"
            variant="pills"
            className="rounded-lg"
          >
            <Tabs.Item active title="Balances" icon={HiUserCircle}>
              <div className="text-white">
                <p className="font-medium text-lg mb-2">Your <span className="text-yellow-400">Balances</span> </p>
                <p className="text-gray-300">
                  View and manage your crypto assets effortlessly.
                </p>
              </div>
            </Tabs.Item>
            <Tabs.Item title="History" icon={MdDashboard}>
              <div className="text-white">
                <p className="font-medium text-lg mb-2">Transaction <span className="text-yellow-400">History</span> </p>
                <p className="text-gray-300">
                  Track your transaction history, earnings, and expenses.
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
