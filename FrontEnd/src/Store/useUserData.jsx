import { useEffect } from "react";
import { create } from "zustand";
import User from "../DummyData/User";

// Zustand store
const useUserData = create((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
  IsUserLogin: false,
  setIsUserLogin: (status) => set({ IsUserLogin: status }),
}));

// check for user's local storage on app load
var StoreUser = JSON.parse(localStorage.getItem("QeeeratUserData"));
const getUserDataFromLocalStorage = () => {
    if (StoreUser) {
        // Fetch User data from Back End using StoreUser._id
        useUserData.getState().setIsUserLogin(true);
    } else {
        useUserData.getState().setIsUserLogin(false);
    }
};

getUserDataFromLocalStorage();
export default useUserData;
