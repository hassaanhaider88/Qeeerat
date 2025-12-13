import { create } from "zustand";

// Zustand store
const useUserData = create((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
  IsUserLogin: false,
  setIsUserLogin: (status) => set({ IsUserLogin: status }),
}));

// check for user's local storage on app load

const getUserDataFromLocalStorage = async () => {
  const StoreUser = JSON.parse(localStorage.getItem("QeeeratUserData"));
  if (StoreUser != null) {
    useUserData.getState().setUserData(StoreUser);
    useUserData.getState().setIsUserLogin(true);
    return;
  } else {
    useUserData.getState().setIsUserLogin(false);
    return;
  }
};

getUserDataFromLocalStorage();
export default useUserData;
