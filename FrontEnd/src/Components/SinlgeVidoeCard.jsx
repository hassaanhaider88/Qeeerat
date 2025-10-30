import { useState } from 'react'
import { BiBookmark, BiDownload, BiLike, BiShareAlt } from 'react-icons/bi'
import { BsBookmarkHeart, BsBookmarkHeartFill, BsFillBookmarkHeartFill, BsFillHeartFill } from 'react-icons/bs'
import { RiBookMarkedLine } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';
import {FaHeart} from 'react-icons/fa'
import { handleUserVidoeLikeClick, hanldeUserVideoSaveClick } from '../Services/MoreOptions';
import {IoIosShareAlt} from 'react-icons/io';
import {MdDownloadForOffline} from 'react-icons/md'
import CustomVideoTag from './CustomVideoTag';
// import VideoUrl from "../../Demmovideo.mp4"
import VideoUrl from "../../public/Demmovideo.mp4"

const SinlgeVidoeCard = ({post}) => {
 const [VidoeLike,setVideoLike] =  useState(false);
 const [VideoSave,setVideoSave] =  useState(false);

 function handleVidoeLikeClick(){
    setVideoLike(!VidoeLike)
    handleUserVidoeLikeClick(post)
 }

 function handleVideoSaveClick(){
   setVideoSave(!VideoSave);
   hanldeUserVideoSaveClick(post)
 }
function handleVideoShareClick(){
   alert('URl copied success!!!')
}

function hanldeVidoeDownloadClick (){
   alert('Video Downloaded Sucess')
}
  return (
     <div className='w-[250px] h-[400px] rounded-3xl overflow-hidden relative flex justify-center items-center '>
         {/* <video className='bg-gray-900 select-none w-full h-full' src="./DemmoVideo.mp4" autoPlay controls={false}></video> */}
         <CustomVideoTag srcUrl={post.videoUrl}/>
        <h1 className='text-[10px] text-gray-200 bg-gray-900 px-3 py-2 w-full text-center absolute bottom-3'>Surah {post.SurahName}, Ayat {post.AyatFrom} To {post.AyatTo}</h1>
         <div className='AllIconsGoesHere flex-col shadow-2xs gap-4 absolute right-2 bottom-20 h-full justify-end items-center flex '>
            {/* Here the real Icons will be place  */}
         <div onClick={handleVidoeLikeClick} className='w-12 h-12 z-30 flex justify-center items-center flex-col cursor-pointer duration-150 transition-all hover:scale-90'>
            {
                VidoeLike ?  <FaHeart  className='text-red-500 active:opacity-10 duration-100 transition-all  w-8 h-8'/> : <FiHeart  className='w-8 active:opacity-10 duration-100 transition-all h-8'/> 
            }
            
            <p className='text-sm'>{post.videoLikes}</p>
         </div>

         <div onClick={handleVideoSaveClick} className='w-8 h-8 cursor-pointer duration-150 transition-all hover:scale-90'>
            {
               VideoSave ?  <BsBookmarkHeartFill className='w-8 h-8 text-gray-200'/> : <BsBookmarkHeart className='w-8 h-8'/> 
            }
            
         </div>

         <div onClick={handleVideoShareClick} className='w-8 h-8 cursor-pointer duration-150 transition-all hover:scale-90'>
            <IoIosShareAlt className='w-8 h-8'/>
         </div>

         <div onClick={hanldeVidoeDownloadClick} className='w-8 h-8 cursor-pointer duration-150 transition-all hover:scale-90'>
            <MdDownloadForOffline className='w-8 h-8'/>
         </div>
         </div>
      </div>
  )
}

export default SinlgeVidoeCard
