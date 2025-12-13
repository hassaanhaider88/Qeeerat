import usePostData from "../Store/usePostData";
import PostData from "../DummyData/PostData.js";
import { toast } from "react-toastify";
import User from "../DummyData/User.js";
import BACKEND_URI from "../utils/BackEndURI.js";
const StoreUser = JSON.parse(localStorage.getItem("QeeeratUserData"));

export const hanldeUserNotInterestInPost = () => {
  // here will be first getiing post url then make request
  alert("hanldeUserNotInterestInPost will be included");
  console.log("clicking");
};

export const hanldeUserFollowClick = () => {
  // here will be first getiing post url then make request
  alert("hanldeUserFollowClick will be included");
};

export const hanldeVideoMuteClick = () => {
  // here will be first getiing post url then make request
  alert("hanldeVideoMuteClick  will be included");
};

export const hanldeBlockPostCreater = () => {
  // here will be first getiing post url then make request
  alert("hanldeBlockPostCreater will be included");
};

export const hanldeReportPostClick = () => {
  // here will be first getiing post url then make request
  alert("hanldeReportPostClick  will be included");
};

export const handleUserVidoeLikeClick = (videoData) => {
  toast.success("handleUserVidoeClick will be included");
  console.log(videoData);
  return true;
};

export const hanldeUserVideoDownload = (ReelData) => {
  return true;
};

export const hanldeUserVideoShare = (ReelData) => {
  return true;
};

export const hanldeUserVideoSaveClick = () => {
  alert("VideoSave click");
};

export const handleUserSearchPosts = (
  SurahName,
  AyatFrom,
  AyatTo,
  setPostData
) => {
  console.log(setPostData);
  alert(
    `Searching Posts for Surah: ${SurahName}, Ayat From: ${AyatFrom}, Ayat To: ${AyatTo}`
  );
  return true;
};

export const handleFetchMorePosts = (setPostData) => {
  // this will be fetching more posts on scroll down
  console.log("fetching ......");
  setPostData(PostData);
};

export const handleUserSubmitPosts = (
  SurahName,
  AyatFrom,
  AyatTo,
  setPostData
) => {
  console.log(setPostData);
  alert(
    `Submitting Posts for Surah: ${SurahName}, Ayat From: ${AyatFrom}, Ayat To: ${AyatTo}`
  );
  return true;
};

export const hanldeUserClickToPremium = () => {
  alert("hanldeUserClickToPremium will be included");
  return true;
};

export const handleUserEditProfile = (
  Name,
  UserName,
  Location,
  Bio,
  UserSelectProfileImg
) => {
  alert(
    `Editing Profile with Name: ${Name}, UserName: ${UserName}, Location: ${Location}, Bio: ${Bio}`
  );
  return true;
};

export const handleUserSignOutClick = () => {
  toast.success("Successfully Sign Out");
  return true;
};

export const handleUserDeleteAcount = () => {
  toast.success("Successfully Delete Acount");
  return true;
};

export const hanldeUserClickOldPassConfirm = (OldPass) => {
  // here will be api call to confirm old password
  if (OldPass === "HMK@088") {
    toast.success("Old Password Confirmed");
    return true;
  } else {
    toast.error("Old Password is Incorrect");
    return false;
  }
};

export const hanldeUserUpdatePassword = (NewPass) => {
  // here will be api call to update password
  if (NewPass.length >= 6) {
    return true;
  } else {
    return false;
  }
};

export const handleUserCreateAccount = async (
  UName,
  UEmail,
  UserSelectProfileImg,
  UPass
) => {
  var res = await fetch(`${BACKEND_URI}/api/user/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: UName,
      email: UEmail,
      password: UPass,
      imageUrl: UserSelectProfileImg,
    }),
  });
  const data = await res.json();
  console.log(data, "more option");
  if (data.success) {
    localStorage.setItem(
      "QeeeratUserData",
      JSON.stringify({
        userId: data.userData,
      })
    );
    return true;
  } else {
    toast.error(data.message);
    return false;
  }
};

export const hanldeUserLogin = async (UEmail, UPass) => {
  // here will be api call to login user
  const res = await fetch(`${BACKEND_URI}/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: UEmail,
      password: UPass,
    }),
  });
  const data = await res.json();
  console.log(data);
  if (data.success) {
    localStorage.setItem(
      "QeeeratUserData",
      JSON.stringify({
        userId: data.userData,
      })
    );
    return true;
  } else {
    toast.error(data.message);
    return false;
  }
};

export const handleUserRequestToResetPas = async (email) => {
  // here will real request gone
  try {
    var res = await fetch(`${BACKEND_URI}/api/user/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      toast.success(data.message);
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const handleUserGettingSingleVidoe = (videoID) => {
  // here real api will be fetch letar inshallah
  return {
    _id: "11vbty36bkjfd",
    videoUrl:
      "https://res.cloudinary.com/dcrkdgbd9/video/upload/v1763134284/user_videos/video_1763134283455_Hassaa_haider.mp4",
    videoLikes: 20090,
    SurahName: "Al-Mu’minoon",
    AyatFrom: 84,
    AyatTo: 87,
    videoCreated: User,
  };
};

export const handleCheckIsVideoInLikedList = (videoID) => {
  return true;
};
export const handleUserCheck = (UserId) => {
  var GetIdForLS = JSON.parse(localStorage.getItem("QeeeratUserData"));
  if (String(GetIdForLS._id) === String(UserId)) {
    return true;
  } else {
    return false;
  }
};

export const handleUserFollowClick = async (userId, action) => {
  // action  will be either follow or unfollow
  try {
    console.log(userId, action,StoreUser);
    var res = await fetch(`${BACKEND_URI}/api/user/follow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        action,
        followerId : StoreUser.userId
      }),
    });
    const data = await res.json();
    console.log(data);
    if (!data.success) {
      return data;
    } else {
      return data;
    }
  } catch (error) {
    return error.message;
  }
  return true;
  // var GetIdForLS = JSON.parse(localStorage.getItem("QeeeratUserData"));
  // if (String(GetIdForLS) === String(userId)) {
  //   return true;
  // } else {
  //   return false;
  // }
};
