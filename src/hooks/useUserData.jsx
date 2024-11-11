// src/hooks/useUserData.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUserData = (telegramID) => {
  const fetchUserData = async ({ queryKey }) => {
    const [, telegram_ID] = queryKey;
    if (!telegram_ID) throw new Error("Invalid Telegram ID");
    const response = await axios.get(
      `https://beamlol-server.onrender.com/allusers/${telegram_ID}`
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["userData", telegramID],
    queryFn: fetchUserData,
    enabled: !!telegramID,
    refetchInterval: 500, // Auto-refetch every 0.5 seconds
    onError: (err) => console.error("Error fetching user data:", err.message),
  });

  return { data, isLoading, error };
};
