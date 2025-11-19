import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { useGlobalState } from "@hmk_codeweb88/useglobalstate";
import useUserData from "./store/useUserData";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgotPass from "./Pages/ForgotPass";

const App = () => {
  const Location = useLocation();
  const { IsUserLogin } = useUserData();
  const [IsLogin, setIsLogin] = useState(IsUserLogin);
  useEffect(() => {
    setIsLogin(IsUserLogin);
  }, [IsUserLogin,Location.pathname]);
  return (
    <>
      {IsLogin ? (
        <Home />
      ) : Location.pathname == "/sign-up" && !IsUserLogin ? (
        <SignUp />
      ) : Location.pathname == "/forgot-pass" && !IsUserLogin ? (
        <ForgotPass />
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;

