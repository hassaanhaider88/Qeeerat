import { useEffect } from "react";
import { create } from "zustand";
import User from "../DummyData/User";

// Zustand store
 const useUserData = create((set) => ({
userData: null,
setUserData: (data) => set({ userData: data }),
}));

export default useUserData;