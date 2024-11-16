// UserContext.jsx
import { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";
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
    tap_power: 1,
    referralLink: ""
  });

  const { data, error, isLoading } = useQuery({
    queryKey: ["userDetails", userId],
    queryFn: async () => {
      if (!userId) throw new Error("No user ID found.");
      const response = await fetch(`https://pcooogcck4k8kkksk4s80g8k.92.112.181.229.sslip.io/allusers/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch user details");
      return response.json();
    },
    enabled: !!userId, // Only run if userId exists
    refetchInterval: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      if (data) {
        setUserData(data); // Update user data when fetched successfully
      }
    },
  });

  // Ensure data is correctly set in the context after fetching
  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

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
