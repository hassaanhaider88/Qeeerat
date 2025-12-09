import React, { use, useEffect, useState } from "react";
import { useGlobalState } from "@hmk_codeweb88/useglobalstate";
import CtmButton from "../Components/CtmButton";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { countryToFlag } from "../Services/FlagAbbrivation";
import timeAgo from "../Services/TimeAgo";
import UserProfilePost from "../Components/UserProfilePost";
import ReduceNumber from "../Services/ReduceNumber";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  handleUserCheck,
  handleUserFollowClick,
} from "../Services/MoreOptions";
import useUserData from "../store/useUserData";

const Profile = () => {
  const { userData } = useUserData();
  const [IsVarifed, setIsVarifed] = useState(userData?.VerifiedUser);
  const [Loading, setLoading] = useState(false);
  const [IsFollowed, setIsFollowed] = useState(false);
  const [IsSameUserViewingProfile, setIsSameUserViewingProfile] =
    useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const UserId = searchParams.get("UserId");
  const handleFollowClick = () => {
    var Res = handleUserFollowClick();
    if (Res) {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
  };
  useEffect(() => {
    // check for user same which is loged in
    // here also data will be updated
    var Res = handleUserCheck(UserId, IsFollowed, setIsFollowed);
    if (Res) {
      setIsSameUserViewingProfile(true);
    } else {
      setIsSameUserViewingProfile(false);
    }
  }, []);
  const [ActiveTab, setActiveTab] = useGlobalState("ActiveTab", "Posts", {
    persist: true,
  });
  const [TimeAgo, setTimeAgo] = useState("2h");
  useEffect(() => {
    TimeAgo;
    const time = timeAgo("2005-01-31T13:10:00Z");
    setTimeAgo(time);
  }, []);
  const [CountryFlagAbbir, setCountryFlagAbbir] = useState(userData?.Location);
  useEffect(() => {
    const abbr = countryToFlag(userData?.Location);
    setCountryFlagAbbir(abbr);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="CoverProfileAndEditDiv relative bg-[#000000] px-3 py-5 h-[60vh]">
        <div className="CoverProfileDiv w-full h-60 overflow-hidden">
          <img
            className="w-full h-full bg-cover bg-center rounded-3xl"
            src="https://i.pinimg.com/originals/9d/d1/b1/9dd1b197167086603e325ff279690e88.jpg"
            alt=""
          />
        </div>
        <div className="EditProfileDiv absolute bottom-10 left-15 cursor-pointer w-30 h-30 rounded-full overflow-hidden border-4 border-white">
          <img
            src={userData?.picture}
            alt={userData?.name}
          />
        </div>
        {IsSameUserViewingProfile && (
          <div
            onClick={() => navigate("/edit-profile")}
            className="absolute bottom-12 right-5"
          >
            <CtmButton Text="Edit" />
          </div>
        )}
      </div>
      <div className="UserInfoLikeNameEtc px-5 md:px-10 py-10">
        <h1
          className={`text-3xl font-bold flex items-center ${
            IsVarifed ? "gap-2" : "gap-4"
          }`}
        >
          {userData?.name}
          {IsVarifed ? (
            <RiVerifiedBadgeFill
              className="ssm:block mt-1.5 hidden"
              color="#813288"
              size={"23"}
            />
          ) : (
            ""
          )}
          {IsSameUserViewingProfile ? (
            <button className="py-1 mt-1.5 px-3 rounded-full cursor-pointer hover:scale-95 duration-300 transition-all active:outline-1 outline-[#813288] hover:border-[#813288] hover:text-[#813288] border border-gray-200 text-sm">
              Get Varified
            </button>
          ) : (
            <button
              onClick={() => handleFollowClick()}
              className="py-1 mt-1.5 px-3 rounded-full cursor-pointer hover:scale-95 duration-300 transition-all active:outline-1 outline-[#813288] hover:border-[#813288] hover:text-[#813288] border border-gray-200 text-sm"
            >
              {IsFollowed ? "Followed" : "Follow"}
            </button>
          )}
        </h1>
        <p className="text-[#888787]">@{userData?.userName}</p>
        <p className=" py-2">
          {/* React Js | Next Js | MERN Stack | APIs Developer with 2 years of
          Experience in Development Always looking for Opportunities and ideas
          Implementation.React Js | Next Js | MERN Stack | APIs Developer with 2
          years of Experience in Development Always looking for Opportunities
          and ideas Implementation. */}
          {userData?.Bio}
        </p>
        <div className="AdditoionalInfo w-full flex justify-evenly items-center">
          <p className="text-[#888787]  ">{ReduceNumber(userData?.NumberOfFollower)} Followers</p>
          <p className="text-[#888787]">{ReduceNumber(userData?.NumberOfFollowing)} Following</p>
          <p className="text-[#888787] flex  gap-2 items-center">
            <ImLocation /> {userData?.Location}
            <span class={`flag-icon flag-icon-${CountryFlagAbbir}`}></span>{" "}
          </p>
          <p className="text-[#888787] flex  gap-2 items-center">
            <HiMiniCalendarDateRange />
            Joined: {TimeAgo}
          </p>
        </div>
      </div>
      <div className="UserTabs w-full cursor-pointer flex justify-around items-center border-b border-gray-600">
        <button
          onClick={() => setActiveTab("Posts")}
          className={`hover:bg-[#88358F] ${
            ActiveTab === "Posts" ? "bg-[#88358F]" : "bg-transparent"
          } cursor-pointer hover:scale-95 w-full duration-300 transition-all py-4`}
        >
          Post
        </button>
        <button
          onClick={() => setActiveTab("Likes")}
          className={`hover:bg-[#88358F] ${
            ActiveTab === "Likes" ? "bg-[#88358F]" : "bg-transparent"
          } cursor-pointer hover:scale-95 w-full duration-300 transition-all py-4`}
        >
          likes
        </button>
        <button
          onClick={() => setActiveTab("Saved")}
          className={`hover:bg-[#88358F] ${
            ActiveTab === "Saved" ? "bg-[#88358F]" : "bg-transparent"
          } cursor-pointer hover:scale-95 w-full duration-300 transition-all py-4`}
        >
          Saved
        </button>
      </div>
      <div className="TabDataShowingHere bg-[#333333] w-full min-h-screen flex justify-center items-center flex-col gap-5">
        {Loading ? (
          <div className="spinner"></div>
        ) : ActiveTab === "Posts" ? (
          <UserProfilePost WhichTypeOfPost={"Posts"} />
        ) : ActiveTab === "Likes" ? (
          <UserProfilePost WhichTypeOfPost={"likes"} />
        ) : (
          <UserProfilePost WhichTypeOfPost={"Saved"} />
        )}
      </div>
    </div>
  );
};

export default Profile;
