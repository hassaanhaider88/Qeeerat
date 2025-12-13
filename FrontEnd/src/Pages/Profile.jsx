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
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  handleUserCheck,
  handleUserFollowClick,
} from "../Services/MoreOptions";
import useUserData from "../store/useUserData";
import { getUserData } from "../utils/googleLogin";
import { toast } from "react-toastify";

const Profile = () => {
  const { userData, setUserData } = useUserData();
  const [User, setUser] = useState({});
  const [IsVarifed, setIsVarifed] = useState(userData?.VerifiedUser);
  const [Loading, setLoading] = useState(false);
  const [IsFollowed, setIsFollowed] = useState(false);
  const [IsSameUser, setIsSameUser] = useState(false);
  const [IsSameUserViewingProfile, setIsSameUserViewingProfile] =
    useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userID = searchParams.get("UserId");
  const handleFollowClick = async () => {
    const res = await handleUserFollowClick(
      userID,
      IsFollowed ? "unfollow" : "follow"
    );
    console.log(res);
    if (res?.success) {
      toast.success(res?.message);
      if (res?.message == "User unfollowed successfully") {
        setIsFollowed(false);
      } else if (res?.message == "User followed successfully") {
        setIsFollowed(true);
      } else {
        setIsFollowed(false);
      }
    }
  };

  useEffect(() => {
    // check for user same which is loged in
    // here also data will be updated
    console.log(userID);

    const fetchUserData = async () => {
      if (userID && userID !== userData?._id) {
        console.log("user is deffered");
        var Res = await getUserData(userID);
        console.log(Res);
        if (Res.success) {
          setUser(Res.UserData);
          setIsSameUserViewingProfile(false);
        } else {
          setIsSameUserViewingProfile(true);

          setUser({});
        }
      } else {
        console.log("same user");
        console.log(userData);
        var Res = await getUserData(userData?.userId);
        console.log(Res);
        if (Res.success) {
          setUser(Res.UserData);
          setIsSameUserViewingProfile(true);
        } else {
          setIsSameUserViewingProfile(false);
          setUser({});
        }
      }
    };
    fetchUserData();
  }, [IsFollowed]);
  useEffect(() => {
    // check if user is in followers or no
    console.log(User);
    var CheckUserFollow = User.FollowerList?.includes(userData?.userId);
    console.log(CheckUserFollow);
    if (CheckUserFollow) {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
  }, [User]);
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
            className="w-full h-full "
            src={User?.picture}
            alt={User?.name}
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
          {User?.name}
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
            <button
              onClick={() => navigate("/get-varify")}
              className="py-1 mt-1.5 px-3 rounded-full cursor-pointer hover:scale-95 duration-300 transition-all active:outline-1 outline-[#813288] hover:border-[#813288] hover:text-[#813288] border border-gray-200 text-sm"
            >
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
        <p className="text-[#888787]">@{User?.userName}</p>
        <p className=" py-2">
          {/* React Js | Next Js | MERN Stack | APIs Developer with 2 years of
          Experience in Development Always looking for Opportunities and ideas
          Implementation.React Js | Next Js | MERN Stack | APIs Developer with 2
          years of Experience in Development Always looking for Opportunities
          and ideas Implementation. */}
          {User?.Bio || "No Bio Available"}
        </p>
        <div className="AdditoionalInfo w-full flex justify-evenly items-center">
          <p className="text-[#888787]  ">
            {ReduceNumber(User?.Followers)} Followers
          </p>
          {/* <p className="text-[#888787]">
            {ReduceNumber(User?.NumberOfFollowing)} Following
          </p> */}
          <p className="text-[#888787] flex  gap-2 items-center">
            <ImLocation /> {User?.Location}
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
      {/* <div className="TabDataShowingHere bg-[#333333] w-full min-h-screen flex justify-center items-center flex-col gap-5">
        {Loading ? (
          <div className="spinner"></div>
        ) : ActiveTab === "Posts" ? (
          <UserProfilePost WhichTypeOfPost={"Posts"} />
        ) : ActiveTab === "Likes" ? (
          <UserProfilePost WhichTypeOfPost={"likes"} />
        ) : (
          <UserProfilePost WhichTypeOfPost={"Saved"} />
        )}
      </div> */}
    </div>
  );
};

export default Profile;
