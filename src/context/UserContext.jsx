// src/context/UserContext.js

import { createContext, useContext } from "react";

export const UserContext = createContext(null);

// Custom hook for easy access to UserContext
export const useUser = () => useContext(UserContext);
