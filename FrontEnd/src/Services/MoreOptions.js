import usePostData from "../Store/usePostData";
import PostData from "../DummyData/PostData.js";
import { toast } from "react-toastify";
import User from "../DummyData/User.js";

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

export const handleUserCreateAccount = (
  UName,
  UEmail,
  UserSelectProfileImg,
  UPass
) => {
  toast.success("Successfully Created Account");
  console.log(UserSelectProfileImg, UName, UEmail); // this is whole event ref to get user selected image
  localStorage.setItem(
    "QeeeratUserData",
    JSON.stringify({
      _id: "1234567890sdfjka56asd",
    })
  );

  return true;
};

export const hanldeUserLogin = (UEmail, UPass) => {
  // here will be api call to login user
  localStorage.setItem(
    "QeeeratUserData",
    JSON.stringify({
      _id: "1234567890sdfjka56asd",
    })
  );
  return true;
};

export const handleUserRequestToResetPas = () => {
  // here will real request gone
  toast.success("Request Sent Successfully");
  return true;
};

export const hanldeUserConfirmEmailOTP = (otp) => {
  // here will be api call to confirm otp
  return true;
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

export const handleUserFollowClick = (userId) => {
  return true;
  // var GetIdForLS = JSON.parse(localStorage.getItem("QeeeratUserData"));
  // if (String(GetIdForLS) === String(userId)) {
  //   return true;
  // } else {
  //   return false;
  // }
};
