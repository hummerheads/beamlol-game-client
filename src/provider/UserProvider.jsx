import { useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { UserContext } from "../context/UserContext"; // Import from separate file

const UserProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const userId = new URLSearchParams(window.location.search).get("user_id");

  const { data, error, isLoading } = useQuery({
    queryKey: ["userDetails", userId],
    queryFn: async () => {
      const response = await fetch(`https://beamlol-server.onrender.com/allusers/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch user details");
      return response.json();
    },
    enabled: !!userId,
    refetchInterval: 1000,
    refetchOnWindowFocus: true,
  });

  const contextValue = useMemo(() => {
    if (isLoading || error) {
      return {
        telegram_ID: "",
        balance: 0,
        perk: 0,
        level: 0,
        spin: 0,
        available_energy: 0,
        total_energy: 0,
        refetchUserData: () => queryClient.invalidateQueries(["userDetails", userId]),
      };
    }
    const { telegram_ID = "", balance = 0, perk = 0, level = 0, spin = 0, available_energy = 0, total_energy = 0 } = data || {};

    return {
      telegram_ID,
      balance,
      perk,
      level,
      spin,
      available_energy,
      total_energy,
      refetchUserData: () => queryClient.invalidateQueries(["userDetails", userId]),
    };
  }, [data, isLoading, error, queryClient, userId]);
  console.log(contextValue);


  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
