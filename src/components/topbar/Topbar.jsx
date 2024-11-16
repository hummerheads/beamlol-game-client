import { useEffect, useState } from "react";
import { useUserData } from "../../hooks/useUserData";
import { NavLink } from "react-router-dom";

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
    <div className="mx-auto flex justify-around bg-[#001F3F] p-3 shadow-lg ring-4 ring-yellow-400 ring-opacity-50  transition-all duration-300 hover:ring-opacity-70">
      {/* Balance */}
      <div className="group flex px-4 gap-2 items-center text-base font-semibold rounded-lg  bg-yellow-400 to-white text-center transition-all transform hover:scale-105 duration-200 glow-effect">
        <img className="w-10 drop-shadow-md group-hover:animate-bounce" src="/icons/booster.png" alt="Balance Icon" />
        <p className="text-[#555555] text-xs font-bold font-heading-aldrich">{balance}</p>
      </div>

      {/* Perk */}
      <div className="group px-4 flex gap-2 items-center text-base font-semibold rounded-lg  bg-yellow-400 to-white text-center transition-all transform hover:scale-105 duration-200 glow-effect">
        <img className="w-7 drop-shadow-md group-hover:animate-bounce" src="/shop/perk.svg" alt="Perk Icon" />
        <p className="text-[#555555] text-xs font-bold font-heading-aldrich">{perk}</p>
      </div>

      {/* Spin */}
      <div className="group px-4 py-2 flex gap-2 items-center text-base font-semibold rounded-lg  bg-yellow-400 to-white text-center transition-all transform hover:scale-105 duration-200 glow-effect">
        <img className="w-8 rounded-full drop-shadow-md group-hover:animate-bounce" src="/icons/spin.png" alt="Spin Icon" />
        <p className="text-[#555555] text-xs font-bold font-heading-aldrich">{spin}</p>
        <NavLink to="/shop">
        <img className="w-4 rounded-full ml-1 drop-shadow-md" src="/icons/plus.svg" alt="Add Icon" />

        </NavLink>
      </div>
    </div>
  );
};

export default Topbar;
