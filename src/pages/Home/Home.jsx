import { useState } from "react";
import { Drawer, Progress } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext"; 
import { useWallet } from "../../provider/WalletContext";
import axios from "axios";
// Adjust the path accordingly

const Home = () => {
  const { level, available_energy, total_energy } = useUser();
  const { tonConnect, walletAddress } = useWallet();


  const [isOpen, setIsOpen] = useState(true);
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

  const handleCheckIn = async () => {
    if (!tonConnect) {
      alert("Wallet is not connected. Please connect your wallet first.");
      return;
    }
  
    try {
      const transactionPayload = {
        to: "your-ton-wallet-address", // Replace with your TON wallet address
        value: 0.2, // Amount in TON
        stateInit: null,
        data: null,
      };
  
      // Request permission for the transaction
      await tonConnect.sendTransaction(transactionPayload);
  
      // Notify the backend about the check-in
      await axios.post("https://beamlol-server.onrender.com/checkin", {
        telegram_ID: walletAddress,
      });
  
      alert("Check-in successful! 0.2 TON sent.");
    } catch (error) {
      console.error("Error during check-in:", error);
      alert("Failed to complete the check-in.");
    }
  };
  

  // Ensure progress does not exceed 100%
  const progress = Math.min(level * 10, 100);

  return (
    <div
      className="bg-[url('/bggif.gif')] flex flex-col items-center px-2 bg-gray-700 pt-5"
      style={{ height: "calc(100vh - 124px)", overflow: "auto" }}
    >
      {/* Balance Display */}
      {/* <Topbar /> */}

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
      <div className="flex justify-evenly w-full mb-4">
        {["Booster", "NFT", "Check In", "Air Drop", "Spin"].map(
          (label, index) => (
            <NavLink key={index} to={label === "Spin" ? "/spin" : "#"} className={label === "Air Drop" ? "hidden" : ""}>
              <div className="flex flex-col items-center">
                <img
                  className="w-8"
                  src={`/icons/${label.toLowerCase().replace(" ", "")}.svg`}
                  alt={label}
                />
                <span className="text-white">{label}</span>
              </div>
            </NavLink>
          )
        )}
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
          <div className="pt-24 pb-20">
            <div className="flex gap-1 justify-center bg-gray-400 w-2/3 py-2 mx-auto bg-opacity-20 rounded-xl">
              <img className="w-6" src="/balance.gif" alt="" />
              <p className="text-md font-bold">+236,900,600</p>
              <img className="w-5 rounded-full" src="/icons/spin.svg" alt="" />
              <p className="text-md font-bold">+60</p>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold py-4">DAILY CHECK-IN ON TON</h1>
              <p className="mx-4 py-4">
                Complete a daily TON transaction and receive massive rewards
              </p>
            </div>
            <div className="flex justify-center">
              <NavLink onClick={handleCheckIn} className="text-2xl px-3 py-2 rounded-2xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-700 to-white ">Pay 0.2 TON to Check In</NavLink>
            </div>
          </div>
        </Drawer.Items>
      </Drawer>

      {/* Energy Display */}
      <div className="bg-[#ff9c17] my-2 items-center justify-center w-1/3 gap-2 rounded-full flex">
        <img
          className="w-10 h-10 rounded-full"
          src="/icons/energy.svg"
          alt="Energy Icon"
        />
        <div>
          <p className="font-bold text-xs text-white">{available_energy}</p>
          <p className="text-[#ffe386] text-xs">/{total_energy}</p>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
