import usePostData from "../Store/usePostData";
import PostData from "../DummyData/PostData.js";
import { toast } from "react-toastify";


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

export const handleUserVidoeLikeClick = () => {
  alert("handleUserVidoeClick will be included");
  return true;
};

export const hanldeUserVideoDownload =(ReelData)=>{
 toast.success('Successfully Download')
}

export const hanldeUserVideoShare = (ReelData) =>{
  toast.success('Successfully Shared')
}

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
      _id : "1234567890sdfjka56asd",
    })
  );
  return true;
};


export const handleUserRequestToResetPas=()=>{
  // here will real request gone 
  toast.success('Request Sent Successfully')
  return true;
}

export const hanldeUserConfirmEmailOTP= (otp)=>{
  // here will be api call to confirm otp
  return true;
}