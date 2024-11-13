// UserContext.jsx
import { createContext, useContext, useState, useCallback, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const UserContext = createContext(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const userId = new URLSearchParams(window.location.search).get("user_id");
  
  const [userData, setUserData] = useState({
    telegram_ID: "",
    balance: 0,
    perk: 0,
    level: 1,
    spin: 0,
    available_energy: 100,
    total_energy: 100,
    tap_power: 1
  });

  const { data, error, isLoading } = useQuery({
    queryKey: ["userDetails", userId],
    queryFn: async () => {
      const response = await fetch(`https://beamlol-server.onrender.com/allusers/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch user details");
      return response.json();
    },
    enabled: !!userId,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setUserData(data);
    }
  });

  const updateUserData = useCallback((newData) => {
    setUserData(prevData => ({
      ...prevData,
      ...newData
    }));
  }, []);

  const refetchUserData = useCallback(() => {
    queryClient.invalidateQueries(["userDetails", userId]);
  }, [queryClient, userId]);

  const contextValue = useMemo(() => ({
    ...userData,
    updateUserData,
    refetchUserData
  }), [userData, updateUserData, refetchUserData]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
