import React, { useEffect, useState } from "react";
import SideNavbar from "../Components/SideNavbar";
import HomeFeed from "./HomeFeed";
import { Route, Routes, useLocation } from "react-router-dom";
import Explore from "./Explore";
import Notification from "./Notification";
import Profile from "./Profile";
import MobileBar from "../Components/MobileBar";
import Premium from "./Premium";
import Login from "./Login";
import SignUp from "./SignUp";
import Settings from "./Settings";
import useUserData from "../store/useUserData";
import AddNewPost from "./AddNewPost";
import EditProfile from "./EditProfile";
import ChangePass from "./ChangePass";
import ForgotPass from "./ForgotPass";

const HomeWithLogin = () => {
  const { userData, setUserData } = useUserData();
  const [IsShowSideBar, setIsShowSideBar] = useState(true);
  const Location = useLocation();
  console.log(Location.pathname);
  useEffect(() => {
    if (Location.pathname == "/sign-up" || Location.pathname == "/login") {
      setIsShowSideBar(false);
    } else {
      setIsShowSideBar(true);
    }
  }, [Location.pathname]);
  useEffect(() => {
    var StoreUser = JSON.parse(localStorage.getItem("QeeeratUserData"));
    console.log(StoreUser);
  }, []);

  return (
    <div className="w-full min-h-screen flex">
      {IsShowSideBar && (
        <>
          <MobileBar />
          <SideNavbar />
        </>
      )}

      <Routes>
        <Route path="/" element={<HomeFeed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/add-new" element={<AddNewPost />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/change-pass" element={<ChangePass />} />
        <Route path="/forgot-pas" element={<ForgotPass />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route />
      </Routes>
    </div>
  );
};

export default HomeWithLogin;
