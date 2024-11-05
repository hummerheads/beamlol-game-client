import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types"; // Import PropTypes
import { UserContext } from "../context/UserContext"; // Import UserContext from UserContext.js

const UserProvider = ({ children }) => {
  // Get userId from URL parameters
  const userId = new URLSearchParams(window.location.search).get("user_id");

  // Fetch user details with React Query
  const { data, error, isLoading } = useQuery({
    queryKey: ["userDetails", userId],
    queryFn: async () => {
      const response = await fetch(`https://beamlol-server.onrender.com/allusers/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch user details");
      return response.json();
    },
    enabled: !!userId,
    refetchInterval: 1000, // Poll every second
  });

  // Destructure data properties, providing default values if data is undefined
  const { balance = 0, perk = 0, level = 0, spin = 0, available_energy = 0, total_energy = 0 } = data || {};

  // Handle loading and error states within the provider if needed
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Provide user data to components
  return (
    <UserContext.Provider value={{ balance, perk, level, spin, available_energy, total_energy }}>
      {children}
    </UserContext.Provider>
  );
};

// Define prop types
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
