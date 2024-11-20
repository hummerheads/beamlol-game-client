import { useCallback, useState } from "react";
import useTonConnect from "../../hooks/useTonConnect";
import { useUser } from "../../context/UserContext";
import { TonConnectButton } from "@tonconnect/ui-react";

const Premium = () => {
  const [status, setStatus] = useState("");
  const { sender, connected } = useTonConnect();
  const context = useUser();
  console.log("Context in Home:", context);

  const {
    telegram_ID,
    refetchUserData,
  } = context;

  const handlePayment = useCallback(async () => {
    if (!connected) {
      setStatus("Please connect your wallet first.");
      return;
    }

    if (!telegram_ID) {
      setStatus("User ID not found. Please log in again.");
      return;
    }

    try {
      setStatus("Sending payment...");
      const transactionResponse = await sender.send(
        "UQAXP55KXVCUp-kTYQ7nuST3YNcvipJ8JSet9F7COb6EjMJF",
        "1"
      );

      if (!transactionResponse) {
        throw new Error("No response from TON Connect transaction.");
      }

      setStatus("Payment sent successfully!");

         // Send a request to the backend to unlock premium features
         const response = await fetch(
          `https://pcooogcck4k8kkksk4s80g8k.92.112.181.229.sslip.io/premium/${telegram_ID}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              increment_balance: 10000000,  // Example energy value
              increment_spin: 1000,     // Price paid for premium
            }),
          }
        );

      if (response.ok) {
        const data = await response.json();
        setStatus(data.message);
        refetchUserData(telegram_ID);
      } else {
        setStatus("Check-in failed. Please try again.");
      }
    } catch (error) {
      setStatus("Payment failed. Please try again.");
      console.error("Error during payment:", error);
    }
  }, [connected, telegram_ID, sender, refetchUserData]);
  return (
    <>
      <div
        className="bg-[url('/Premium/bg3.webp')] font-heading-aldrich bg-cover bg-center h-[800px] pt-10"
        style={{ height: "calc(100vh - 132px)", overflow: "auto" }}
      >
        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats Section */}
          <div className="flex gap-4 items-center text-lg font-bold mx-auto rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white w-1/2 justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
            <img src="/Premium/Avatar Stack.svg" alt="Avatar Stack" />
            <h1 className="text-gray-800 text-xl">22 Joined</h1>
          </div>

          {/* Title Section */}
          <div className="my-8">
            <h1 className="text-4xl text-[#FBE67B] mb-4 font-extrabold text-center shadow-2xl animate__animated animate__fadeIn">
              Get access to BeamLol Premium
            </h1>
          </div>

          {/* Premium Features Section */}
          <div className="mx-4 p-6 rounded-lg bg-gray-800 border border-[rgba(255,255,255,0.53)] shadow-lg grid gap-4 text-white">
            {/* Achievement Section */}
            <div className="flex items-center gap-6 p-4 bg-gray-700 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <img
                src="/Premium/achievement.png"
                alt="Achievement"
                className="w-12 h-12"
              />
              <p className="text-base font-medium">
                To achieve permanent eligibility for the Grand Giveaway, an
                exclusive series of events for BeamLol premium holders featuring
                substantial USDT and luxury item prizes.
              </p>
            </div>

            {/* Priority Section */}
            <div className="flex items-center gap-6 p-4 bg-gray-700 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <img
                src="/Premium/priority.png"
                alt="Priority"
                className="w-12 h-12"
              />
              <p className="text-base font-medium">
                Ensure that your transaction is prioritized in the airdrop claim
                queue.
              </p>
            </div>

            {/* Bonus Section */}
            <div className="flex items-center gap-6 p-4 bg-gray-700 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <img src="/Premium/bonus.png" alt="Bonus" className="w-12 h-12" />
              <p className="text-base font-medium">
                Receive a one-time bonus of 10,000,000 coins along with 1,000
                spins.
              </p>
            </div>

            {/* Profile Enhancement Section */}
            <div className="flex items-center gap-6 p-4 bg-gray-700 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <img
                src="/Premium/binance.png"
                alt="Profile Enhancement"
                className="w-12 h-12"
              />
              <p className="text-base font-medium">
                Enhance your profile presentation with a distinctive design
                specifically crafted for premium users.
              </p>
            </div>
          </div>
          <h1 className="text-white text-2xl text-center mt-4">You Will Get</h1>
          {/* Button Section */}
          <div className="mx-auto flex gap-4 flex-wrap justify-center  ">
            <button className="text-base font-bold rounded-md p-4 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center">
                <img className="w-10" src="/icons/booster.png" alt="" />
                <p> 1,00,00,000</p>
              </div>
            </button>
            <button className="text-base font-bold rounded-md p-4 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center">
                <img className="w-10" src="icons/spin.png" alt="" />
                <p> 1000 Spins</p>
              </div>
            </button>
            <button className="text-base font-bold rounded-md p-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center">
                <img className="w-8" src="icons/NFT.svg" alt="" />
                <p>1 Random NFT</p>
              </div>
            </button>
          </div>

          {/* Pay Section */}
          <div className="py-5 text-center">
            <h1 className="text-white text-2xl font-bold mb-4">
              For Accessing Premium Features
            </h1>

            <div className="flex justify-center">
              <button
                className="text-2xl px-3 py-2 rounded-2xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-700 to-white"
                onClick={handlePayment}
              >
              Pay 1 TON for Premium
              </button>
            </div>
            {status && <p className="mt-4 text-center text-white">{status}</p>}
            {!connected && (
              <TonConnectButton className="my-connect-button mx-auto my-2" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Premium;
