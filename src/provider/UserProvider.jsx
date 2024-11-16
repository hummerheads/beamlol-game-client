// //UserProvider.jsx
// import { useMemo } from "react";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import PropTypes from "prop-types";
// import { UserContext } from "../context/UserContext";

// const UserProvider = ({ children }) => {
//   const queryClient = useQueryClient();
//   const userId = new URLSearchParams(window.location.search).get("user_id");

//   const { data, error, isLoading } = useQuery({
//     queryKey: ["userDetails", userId],
//     queryFn: async () => {
//       const response = await fetch(`https://pcooogcck4k8kkksk4s80g8k.92.112.181.229.sslip.io/allusers/${userId}`);
//       if (!response.ok) throw new Error("Failed to fetch user details");
//       return response.json();
//     },
//     enabled: !!userId,
//     refetchInterval: false, // Disabled frequent refetching
//     refetchOnWindowFocus: false, // Disable refetch on window focus
//   });

//   const refetchUserData = () => queryClient.invalidateQueries(["userDetails", userId]);

//   const contextValue = useMemo(() => {
//     if (isLoading || error) {
//       return {
//         telegram_ID: "",
//         balance: 0,
//         perk: 0,
//         level: 0,
//         spin: 0,
//         available_energy: 0,
//         total_energy: 0,
//         tap_power: 0,
//         refetchUserData,
//       };
//     }

//     const {
//       telegram_ID = "",
//       balance = 0,
//       perk = 0,
//       level = 0,
//       spin = 0,
//       available_energy = 0,
//       total_energy = 0,
//       tap_power = 0,
//     } = data || {};

//     return {
//       telegram_ID,
//       balance,
//       perk,
//       level,
//       spin,
//       available_energy,
//       total_energy,
//       tap_power,
//       refetchUserData,
//     };
//   }, [data, refetchUserData]);

//   console.log(contextValue);

//   return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
// };

// UserProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default UserProvider;
