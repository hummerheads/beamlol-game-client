import { createContext, useContext } from "react";

// Create the UserContext
export const UserContext = createContext(null);

// Custom hook to access the UserContext safely
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    return {
      telegram_ID: "",
      balance: 0,
      perk: 0,
      level: 0,
      spin: 0,
      available_energy: 0,
      total_energy: 0,
      refetchUserData: () => {},
    };
  }
  return context;
};
