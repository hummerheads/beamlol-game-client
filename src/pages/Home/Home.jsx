// Home.jsx
import { useEffect, useState, useCallback } from "react";
import { Drawer } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import useTonConnect from "../../hooks/useTonConnect";
import { TonConnectButton } from "@tonconnect/ui-react";
import { FaCoins } from "react-icons/fa";

const Home = () => {
  const context = useUser();
  console.log("Context in Home:", context);

  const {
    telegram_ID,
    level,
    available_energy,
    total_energy,
    tap_power,
    refetchUserData,
    updateUserData,
    
  } = context;

  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const { sender, connected } = useTonConnect();
  const [taps, setTaps] = useState([]);

  useEffect(() => {
    // Ensure the component has the correct telegram_ID
    console.log("Telegram User ID:", telegram_ID);
  }, [telegram_ID]); // This ensures we log the telegram_ID when it's available

  const handleTap = useCallback(async (e) => {
    if (!e || !e.currentTarget) return;
  
    if (available_energy < (tap_power || 1)) {
      alert("Not enough energy to tap!");
      return;
    }
  
    if (!telegram_ID) {
      alert("User ID is missing. Please log in again.");
      return;
    }
  
    const rect = e.currentTarget.getBoundingClientRect();
    const tapX = e.clientX - rect.left;
    const tapY = e.clientY - rect.top;
  
    const newTap = {
      id: Date.now(),
      x: tapX,
      y: tapY,
    };
  
    setTaps((prevTaps) => [...prevTaps, newTap]);
  
    const newEnergy = available_energy - (tap_power || 1);
  
    // Update local state first
    updateUserData({
      available_energy: newEnergy,
    });
  
    try {
      const response = await fetch(
        `https://beamlol-server.onrender.com/allusers/${telegram_ID}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            balanceIncrement: tap_power || 1,
            available_energy_decrement: tap_power || 1, // Make sure this matches backend logic
          }),
        }
      );
  
      if (!response.ok) {
        // Revert the change if the server request fails
        updateUserData({
          available_energy: available_energy,
        });
        console.error("Failed to process tap.");
      }
    } catch (error) {
      // Revert the change if there's an error
      updateUserData({
        available_energy: available_energy,
      });
      console.error("Error during tap action:", error);
    }
  }, [available_energy, tap_power, telegram_ID, updateUserData]);
  
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

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
        "0.2"
      );

      if (!transactionResponse) {
        throw new Error("No response from TON Connect transaction.");
      }

      setStatus("Payment sent successfully!");

      const response = await fetch(
        `https://beamlol-server.onrender.com/${telegram_ID}`,
        {
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
        }
      );

      if (response.ok) {
        const data = await response.json();
        setStatus(data.message);
        localStorage.setItem("lastCheckIn", new Date().getTime().toString());
        setIsOpen(false);
        refetchUserData(telegram_ID);
      } else {
        setStatus("Check-in failed. Please try again.");
      }
    } catch (error) {
      setStatus("Payment failed. Please try again.");
      console.error("Error during payment:", error);
    }
  }, [connected, telegram_ID, sender, refetchUserData]);

  useEffect(() => {
    const resetEnergy = async () => {
      if (!telegram_ID) return;

      try {
        await fetch(
          `https://beamlol-server.onrender.com/reset-energy/${telegram_ID}`,
          {
            method: "PATCH",
          }
        );
        refetchUserData(telegram_ID);
      } catch (error) {
        console.error("Error resetting energy:", error);
      }
    };

    const interval = setInterval(resetEnergy, 3600000);
    return () => clearInterval(interval);
  }, [telegram_ID, refetchUserData]);

  useEffect(() => {
    const lastCheckIn = localStorage.getItem("lastCheckIn");
    const now = new Date().getTime();

    if (!lastCheckIn || now - parseInt(lastCheckIn) > 24 * 60 * 60 * 1000) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (taps.length > 0) {
      const timer = setTimeout(() => {
        setTaps((prev) => prev.slice(1));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [taps]);

  const progress = Math.min(level * 10, 100);

  return (
    <div
      className="bg-[url('/bggif1.gif')] flex flex-col items-center px-2 bg-gray-700 pt-5"
      style={{ height: "calc(100vh - 132px)", overflow: "auto" }}
    >
      <div className="flex gap-6 font-heading-aldrich tracking-wider w-11/12 mb-5">
        {["Giveaways", "Level"].map((label, index) => (
          <NavLink
          to={label === "Level" ? "/level" : ""}
            key={index}
            className="w-full py-2 rounded-xl text-center bg-gray-700 hover:from-[#2b6cb0] hover:to-[#63b3ed] transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <span className=" text-xs font-bold text-white block mb-1">{label}</span>
            <span className="block text-white text-lg font-bold drop-shadow-md">
              {index === 1 ? (
                `${level}`
              ) : index === 2 ? (
                `${level}`
              ) : (
              <div className="flex justify-center gap-2 items-center">
                <FaCoins className="inline text-yellow-400" />
                <p>Coming Soon</p>
              </div>
              )}
            </span>
          </NavLink>
        ))}
      </div>

      <div className="w-11/12 max-w-lg font-heading-aldrich tracking-wider mb-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-100 text-lg font-semibold">Epic Level</span>
          <span className="text-gray-100 text-base font-medium">
            Level {level}/10
          </span>
        </div>
        <NavLink to="/level">
          <div
            className="relative h-6 rounded-full overflow-hidden bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, #6C63FF 0%, #AB47BC 50%, #FF4081 100%)",
            }}
          >
            <div
              className="absolute h-full bg-teal-500 rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)",
              }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm">
              {progress}%
            </span>
          </div>
        </NavLink>
      </div>

      <div className="flex justify-center font-heading-aldrich tracking-widest gap-7 w-full">
        {["Booster", "Air Drop", "Spin", "Check In"].map((label, index) => (
          <NavLink
            key={index}
            to={
              label === "Spin"
                ? "/spin"
                : label === "Booster"
                ? "/booster"
                : "/"
            }
            className={label === "Air Drop" ? "hidden" : ""}
            onClick={label === "Check In" ? () => setIsOpen(true) : null}
          >
            <div className="flex flex-col items-center">
              <img
                className="w-12"
                src={`/icons/${label.toLowerCase().replace(" ", "")}.png`}
                alt={label}
              />
              <span className="text-white">{label}</span>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="flex justify-center relative">
        <img
          src="/banner.png"
          alt="A cute robot with glowing eyes"
          className="h-[380px] mb-3 cursor-pointer"
          onClick={handleTap}
        />

        {taps.map((tap) => (
          <div
            key={tap.id}
            className="absolute text-white text-3xl font-black pointer-events-none"
            style={{
              left: `${tap.x}px`,
              top: `${tap.y}px`,
              animation: "fadeUp 1s forwards",
            }}
          >
            +{tap_power || 1}
          </div>
        ))}
      </div>

      <style>
        {
          `@keyframes fadeUp {
            0% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-80px); }
          }`
        }
      </style>

      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="bottom"
        className="bg-[url('/checkinbg.png')] bg-cover text-white font-heading-aldrich"
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
              <button
                className="text-2xl px-3 py-2 rounded-2xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-700 to-white"
                onClick={handlePayment}
              >
                Pay 0.2 TON to Check In
              </button>
            </div>
            {status && <p className="mt-4 text-center">{status}</p>}
            {!connected && (
              <TonConnectButton className="my-connect-button mx-auto my-2" />
            )}
          </div>
        </Drawer.Items>
      </Drawer>

      <div className="my-2 items-center gap-2 rounded-full flex">
        <img
          className="w-12 h-12 rounded-full"
          src="/icons/energy.svg"
          alt="Energy Icon"
        />
        <div className="bg-[#ff9c17] px-10 font-heading-aldrich py-1 rounded-2xl">
          <p className="font-bold text-xs text-white">{available_energy}</p>
          <p className="text-[#ffe386] text-xs">/{total_energy}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
