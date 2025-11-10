import { BiRightArrow } from "react-icons/bi";
import React, { useState } from "react";
import CtmToggle from "../Components/CtmToggle";
import { useGlobalState } from "@hmk_codeweb88/useglobalstate";

const Settings = () => {
  const [IsONForNotify, setIsONForNotify] = useGlobalState(
    "IsONForNotify",
    false,
    { persist: true }
  );
  return (
    <div className="w-full min-h-screen px-5 py-10 bg-black text-white">
      <h1 className="text-3xl font-semibold">Acount Settings</h1>
      <div className="UserBasicInfo px-3 py-10">
        <h1>Basic Info</h1>
        <div className="NotificationSetting flex justify-around items-center py-5">
          <h1>Get Notifications </h1>
          <CtmToggle
            IsONForNotify={IsONForNotify}
            setIsONForNotify={setIsONForNotify}
          />
        </div>
      </div>
      <div className="AdvanceSettings">
        <h1 className="text-2xl font-semibold">Advance Settings</h1>
        <div className="flex justify-around mt-3 items-center py-5 hover:bg-gray-800 cursor-pointer duration-200 px-3 rounded transition-all">
          <button className="">Change Password</button>
          <BiRightArrow />
        </div>

        <div className="flex justify-around mt-3 items-center py-5 hover:bg-gray-800 cursor-pointer duration-200 px-3 rounded transition-all">
          <button className="">Changle Email</button>
          <BiRightArrow />
        </div>

        {/* Acount Delete And Sign Out */}
        <div className="flex justify-between  md:px-10 mt-3 items-center py-5 hover:bg-gray-800 cursor-pointer duration-200 px-3 rounded transition-all">
          <button className="">Delete Account</button>
          <BiRightArrow />
        </div>

        <div className="flex justify-between  md:px-10 mt-3 items-center py-5 hover:bg-gray-800 cursor-pointer duration-200 px-3 rounded transition-all">
          <button className="">Sign Out</button>
          <BiRightArrow />
        </div>
      </div>
    </div>
  );
};

export default Settings;
