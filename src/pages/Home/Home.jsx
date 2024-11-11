import { useEffect, useState } from "react";
import { Drawer, Progress } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import useTonConnect from "../../hooks/useTonConnect";
import { TonConnectButton } from "@tonconnect/ui-react";

// import { useWallet } from "../../provider/WalletContext";
// import axios from "axios";
// import { promptPayment } from "../../provider/WalletUtils";
// Adjust the path accordingly

const Home = () => {
  const { level, available_energy, total_energy } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const { sender, connected } = useTonConnect();

  // Check cooldown from localStorage
  useEffect(() => {
    const lastCheckIn = localStorage.getItem("lastCheckIn");
    const now = new Date().getTime();

    // Open drawer if it's the first visit of the day or 24 hours have passed
    if (!lastCheckIn || now - parseInt(lastCheckIn) > 24 * 60 * 60 * 1000) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => setIsOpen(false);

  // Function to assign text colors dynamically for the labels
  const getLabelColor = (index) => {
    switch (index) {
      case 0:
        return "text-yellow-500";
      case 1:
        return "text-blue-500";
      case 2:
        return "text-green-500";
      default:
        return "";
    }
  };

  const handlePayment = async () => {
    if (!connected) {
      setStatus("Please connect your wallet first.");
      console.error("Wallet is not connected.");
      return;
    }
  
    const amountNumber = parseFloat(0.2);
    const contractAddress = "UQAXP55KXVCUp-kTYQ7nuST3YNcvipJ8JSet9F7COb6EjMJF";
  
    // Extract telegram_ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const telegram_ID = urlParams.get("user_id");
  
    // Check if telegram_ID is available
    if (!telegram_ID) {
      setStatus("User ID not found in the URL. Please log in again.");
      console.error("Telegram ID is missing from URL parameters.");
      return;
    }
  
    try {
      setStatus("Sending payment...");
      console.log("Initiating payment to:", contractAddress);
  
      // Attempt to send the payment
      const transactionResponse = await sender.send(contractAddress, amountNumber.toString());
  
      if (!transactionResponse) {
        throw new Error("No response from TON Connect transaction.");
      }
  
      console.log("Transaction Response:", transactionResponse);
      setStatus("Payment sent successfully!");
  
      // Proceed with backend update if payment was successful
      const response = await fetch(`https://beamlol-server.onrender.com/allusers/${telegram_ID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          balanceIncrement: 100000,
          spinIncrement: 100,
          checkInIncrement: 1,
          isCheckIn: true,
        }),
      });
  
      // Check if the response is JSON before parsing
      if (response.headers.get("Content-Type")?.includes("application/json")) {
        const data = await response.json();
        if (response.ok) {
          console.log("Backend Response:", data);
          setStatus(data.message);
          localStorage.setItem("lastCheckIn", new Date().getTime().toString());
          setIsOpen(false);
        } else {
          console.error("Backend Error:", data.message);
          setStatus("Check-in failed. Please try again.");
        }
      } else {
        console.error("Unexpected response type:", response);
        setStatus("Unexpected response from server. Please try again later.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      setStatus("Payment failed. Please try again.");
    }
  };
  
  
  

  // onClick={handleCheckIn} disabled={isCheckingIn}
  // const handleCheckIn = async () => {
  //   try {
  //     setIsCheckingIn(true);

  //     // Trigger payment of 0.2 TON to a specific wallet address
  //     const paymentResult = await promptPayment(0.2, "YUQCe9aSKTBSM1Z0_QqanctJqmEltQ9a1C2n9Xm9oesEvCp0l");

  //     if (paymentResult.success) {
  //       // Call backend to update balance and spins after successful payment
  //       await axios.post("https://beamlol-server.onrender.com/checkin", {
  //         telegram_ID: walletAddress,
  //       });
  //       alert("Check-in successful! Balance and spins have been updated.");
  //     } else {
  //       alert("Payment was unsuccessful. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error during check-in:", error);
  //     alert("Check-in failed. Please try again.");
  //   } finally {
  //     setIsCheckingIn(false);
  //   }
  // };

  // Ensure progress does not exceed 100%
  const progress = Math.min(level * 10, 100);

  return (
    <div
      className="bg-[url('/bggif.gif')] flex flex-col items-center px-2 bg-gray-700 pt-5"
      style={{ height: "calc(100vh - 128px)", overflow: "auto" }}
    >
      {/* Giveaway, Leaderboard, and Level Section */}
      <div className="flex gap-5 w-full mb-5">
        {["Giveaways", "Leaderboard", "Level"].map((label, index) => (
          <div
            key={index}
            className="w-full bg-gray-800 p-2 rounded-lg text-center"
          >
            <span
              className={`font-semibold text-xs block ${getLabelColor(index)}`}
            >
              {label}
            </span>
            <span className="block text-white">
              {index === 1 ? "1st" : index === 2 ? `${level}` : "🪙"}
            </span>
          </div>
        ))}
      </div>

      {/* Level Progress */}
      <div className="w-full mb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-white text-xs">Epic</span>
          <span className="text-white text-xs">
            Level <br /> {level}/10
          </span>
        </div>
        <NavLink to="/level">
          <Progress
            progress={progress}
            color="teal"
            size="xl"
            className="rounded-full bg-teal-100 shadow-lg animate-pulse"
            style={{
              width: "100%",
              background:
                "linear-gradient(120deg, #ADFAA1 0%, #C597CC 45%, #2F39A3 100%)",
            }}
          />
        </NavLink>
      </div>

      {/* Feature Icons */}
      <div className="flex justify-center gap-7 w-full mb-4">
        {["Booster", "Air Drop", "Spin", "Check In"].map((label, index) => (
          <NavLink
            key={index}
            to={label === "Spin" ? "/spin" : "#"}
            className={label === "Air Drop" ? "hidden" : ""}
            onClick={label === "Check In" ? () => setIsOpen(true) : ""}
          >
            <div className="flex flex-col items-center">
              <img
                className="w-8"
                src={`/icons/${label.toLowerCase().replace(" ", "")}.svg`}
                alt={label}
              />
              <span className="text-white">{label}</span>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Banner */}
      <div className="flex justify-center">
        <img
          src="/banner.png"
          alt="A cute robot with glowing eyes"
          className="h-[360px]"
        />
      </div>

      {/* Premium Drawer */}
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="bottom"
        className="bg-[url('/checkinbg.png')] text-white"
      >
        <Drawer.Header />
        <Drawer.Items>
          <div className="pt-16 pb-10">
            <div className="flex gap-1 justify-center bg-gray-400 w-2/3 py-2 mx-auto bg-opacity-20 rounded-xl">
              <img className="w-6" src="/balance.gif" alt="" />
              <p className="text-md font-bold">+1,00,000</p>
              <img className="w-5 rounded-full" src="/icons/spin.svg" alt="" />
              <p className="text-md font-bold">+100</p>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold py-4">DAILY CHECK-IN ON TON</h1>
              <p className="mx-4 py-4">
                Complete a daily TON transaction and receive massive rewards
              </p>
            </div>
            <div className="flex justify-center">
              <NavLink
                className="text-2xl px-3 py-2 rounded-2xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-700 to-white"
                onClick={handlePayment}
              >
                Pay 0.2 TON to Check In
              </NavLink>
            </div>
            {status && <p className="mt-4 text-center">{status}</p>}
            {!connected ? (
              <TonConnectButton className="my-connect-button mx-auto my-2" />
            ) : (
              ""
            )}
          </div>
        </Drawer.Items>
      </Drawer>

      {/* Energy Display */}
      <div className=" my-2 items-center w-1/3 gap-2 rounded-full flex">
        <img
          className="w-10 h-10 rounded-full"
          src="/icons/energy.svg"
          alt="Energy Icon"
        />
        <div className="bg-[#ff9c17] px-8 py-1 rounded-2xl">
          <p className="font-bold text-xs text-white">{available_energy}</p>
          <p className="text-[#ffe386] text-xs">/{total_energy}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
