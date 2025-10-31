import React, { useEffect, useState } from 'react'
import { BiBookmark, BiDislike, BiDotsHorizontal, BiDownload, BiLike, BiSave, BiShareAlt } from 'react-icons/bi'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import MoreOptionsDiv from './MoreOptionsDiv';
import { FcLike } from 'react-icons/fc';
import { hanldeUserFollowClick } from '../Services/MoreOptions';
import SinlgeVidoeCard from './SinlgeVidoeCard';
import { LiaSadTear } from 'react-icons/lia';

const HomeFeedPost = ({post}) => {
 const [isVerified, setIsVerified] =  useState(true);
 const [IsShowMoreOptions, setIsShowMoreOptions] =  useState(false);
 const [IsFollow, setIsFollow] =  useState(false);

 useEffect(()=>{
//  Here W'll check first user is in follwoing or not ya is same user that is login or not
 },[])

 function handleFollowClick(){
    hanldeUserFollowClick(post);
    setIsFollow(!IsFollow)
 }
  return ( 
    <div className='WholePost relative border-b-2 mb-5 pb-5 border-t-2 w-full px-5'>
        <div className="UserInfoWIthThreeDots w-full flex justify-between  items-center">
   <div className="Userinfo w-full flex justify-start items-center gap-3">
    <img src={post.videoCreated.ImageUrl} className='w-18 h-18 rounded-full' alt="UserName" />
    <div className='ssm:block hidden'>
        <h1>{post.videoCreated.Name}</h1>
        <p>@{post.videoCreated.UserName}</p>
    </div>
    {/* only show when user is verified */}
{
    isVerified && <div>
        <RiVerifiedBadgeFill className='ssm:block hidden' color='#813288' size={'19'} />
    </div>
}
<button onClick={handleFollowClick} className={`${IsFollow ? "bg-[#da55e69f]" : "bg-[#555fe69f]"} py-2 px-4  rounded-3xl cursor-pointer duration-300 transition-all hover:scale-105`}>{IsFollow ? "Following" : "Follow"}</button>

   </div>
   
   <div onClick={()=>setIsShowMoreOptions(!IsShowMoreOptions)} className="ThreeDot">
    <BiDotsHorizontal  className='w-10 h-10 rounded-full p-1 hover:bg-gray-400 duration-300 transition-all cursor-pointer' size={'30'} />
   </div>
   {
    IsShowMoreOptions &&
    <div className="absolute py-3 z-50 px-5 rounded-4xl right-0 bottom-10">
    {/* here i will how the moreoption card inshallah */}
      <div className='AllOptions relative z-20 w-full py-2 bg-gray-900 text-white px-4 flex flex-col justify-center items-center rounded-3xl'>
          <div onClick={()=>{hanldeUserNotInterestInPost();setIsShowMoreOptions(!IsShowMoreOptions)}} className="Option flex items-center w-full rounded-3xl py-2 px-3 gap-3 hover:bg-gray-500 cursor-pointer duration-300 text-lg transition-all">
               <LiaSadTear />
              <p>Not Ineterested in post</p>
          </div>
    
          <div onClick={()=>{hanldeUserFollowClick();setIsShowMoreOptions(!IsShowMoreOptions)}}  className="Option flex items-center w-full rounded-3xl py-2 px-3 gap-3 hover:bg-gray-500 cursor-pointer duration-300 text-lg transition-all">
               <LiaSadTear />
              <p>Follow UserName</p>
          </div>
    
          <div onClick={()=>{hanldeVideoMuteClick();setIsShowMoreOptions(!IsShowMoreOptions)}}  className="Option flex items-center w-full rounded-3xl py-2 px-3 gap-3 hover:bg-gray-500 cursor-pointer duration-300 text-lg transition-all">
               <LiaSadTear />
              <p>Mute</p>
          </div>
    
          <div onClick={()=>{hanldeBlockPostCreater();setIsShowMoreOptions(!IsShowMoreOptions)}}  className="Option flex items-center w-full rounded-3xl py-2 px-3 gap-3 hover:bg-gray-500 cursor-pointer duration-300 text-lg transition-all">
               <LiaSadTear />
              <p>Block UserName</p>
          </div>
    
          <div onClick={()=>{hanldeReportPostClick();setIsShowMoreOptions(!IsShowMoreOptions)}}  className="Option flex items-center w-full rounded-3xl py-2 px-3 gap-3 hover:bg-gray-500 cursor-pointer duration-300 text-lg transition-all">
               <LiaSadTear />
              <p>Report Post</p>
          </div>
          
    
        </div>
    {/* <MoreOptionsDiv IsShowMoreOptions={IsShowMoreOptions} setIsShowMoreOptions={setIsShowMoreOptions}/> */}
   </div>}
   <div>

   </div>
        </div>
      {/* Post Vidoe Goes Here */}
<div className="w-full h-full flex justify-center items-center">
   <SinlgeVidoeCard post={post}/>
</div>
    </div>
  )
}

export default HomeFeedPost
