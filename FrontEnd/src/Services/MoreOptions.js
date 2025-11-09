import usePostData from "../Store/usePostData";
import PostData from "../DummyData/PostData.js";

export const hanldeUserNotInterestInPost=()=>{
    // here will be first getiing post url then make request 
    alert('hanldeUserNotInterestInPost will be included')
    console.log('clicking')
}


export const hanldeUserFollowClick=()=>{
    // here will be first getiing post url then make request 
    alert('hanldeUserFollowClick will be included')
}

export const hanldeVideoMuteClick =()=>{
    // here will be first getiing post url then make request 
    alert('hanldeVideoMuteClick  will be included')
}

export const hanldeBlockPostCreater=()=>{
    // here will be first getiing post url then make request 
    alert('hanldeBlockPostCreater will be included')
}

export const hanldeReportPostClick =()=>{
    // here will be first getiing post url then make request 
    alert('hanldeReportPostClick  will be included')
}

export const handleUserVidoeLikeClick = () =>{
    alert('handleUserVidoeClick will be included')
}

export const hanldeUserVideoSaveClick = () =>{
    alert('VideoSave click')
}

export const handleUserSearchPosts = (SurahName, AyatFrom, AyatTo,setPostData) =>{
    console.log(setPostData)
    alert(`Searching Posts for Surah: ${SurahName}, Ayat From: ${AyatFrom}, Ayat To: ${AyatTo}`);
    return true;
}

export const handleFetchMorePosts = (setPostData) =>{
    // this will be fetching more posts on scroll down 
    console.log('fetching ......')
    setPostData(PostData);
}

export const handleUserSubmitPosts = (SurahName, AyatFrom, AyatTo,setPostData) =>{
    console.log(setPostData)
    alert(`Submitting Posts for Surah: ${SurahName}, Ayat From: ${AyatFrom}, Ayat To: ${AyatTo}`);
    return true;
}

export const hanldeUserClickToPremium = () =>{
    alert('hanldeUserClickToPremium will be included')
    return true;
}