import { useEffect, useState } from "react";
import { useUserData } from "../../hooks/useUserData";

const Topbar = () => {
  const [telegramID, setTelegramID] = useState(null);
  const [isWebAppReady, setIsWebAppReady] = useState(false);

  useEffect(() => {
    // Initialize Telegram Web App and retrieve user ID
    if (window.Telegram && window.Telegram.WebApp) {
      const userId = window.Telegram.WebApp.initDataUnsafe?.user?.id;

      if (userId) {
        console.log("Telegram User ID:", userId);
        setTelegramID(userId);
        setIsWebAppReady(true);
        window.Telegram.WebApp.expand();
      } else {
        console.error("Failed to retrieve a valid Telegram user ID.");
      }
    } else {
      console.error("Telegram WebApp API is not available");
    }
  }, []);

  // Use custom hook to fetch user data
  const { data: userData, isLoading, error } = useUserData(telegramID);
  console.log("Fetched User Data:", userData);

  if (!isWebAppReady || !telegramID) {
    return (
      <div className="text-center text-red-500">
        Telegram Web App is not ready or Telegram ID is missing.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500">
        Failed to load user data. Please try again later.
      </div>
    );
  }

  // Provide default values using optional chaining
  const balance = userData?.balance ?? 0;
  const perk = userData?.perk ?? 0;
  const spin = userData?.spin ?? 0;

  return (
    <div className="mx-auto flex justify-around gap-2 bg-gray-800">
      {/* Balance Section */}
      <div className="flex gap-2 items-center text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
        <img className="w-6" src="/icons/booster.png" alt="Booster Icon" />
        <p className="text-[#555555] text-xs">{balance}</p>
      </div>

      {/* Perk Section */}
      <div className="flex gap-2 items-center text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
        <img className="w-6" src="/perk.svg" alt="Perk Icon" />
        <p className="text-[#555555] text-xs">{perk}</p>
      </div>

      {/* Spin Section */}
      <div className="flex gap-2 items-center text-base font-bold rounded-md p-2 my-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-center">
        <img className="w-5 rounded-full" src="/icons/spin.svg" alt="Spin Icon" />
        <p className="text-[#555555] text-xs">{spin}</p>
        <img className="w-4 rounded-full" src="/icons/plus.svg" alt="Plus Icon" />
      </div>
    </div>
  );
};

export default Topbar;
