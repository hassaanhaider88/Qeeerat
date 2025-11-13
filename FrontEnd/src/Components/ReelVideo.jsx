import { BiPause } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";
import { MdShare } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import { GoBookmark } from "react-icons/go";
import { BiHeart } from "react-icons/bi";
import { useRef, useState, useMemo } from "react";
import { FaHeart } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import {
  handleUserVidoeLikeClick,
  hanldeUserVideoDownload,
  hanldeUserVideoSaveClick,
  hanldeUserVideoShare,
} from "../Services/MoreOptions";
import { useGlobalState } from "@hmk_codeweb88/useglobalstate";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const ReelVideo = ({ ReelData, IDX }) => {
  var [ShowReelIndex,setShowReelIndex] = useGlobalState("ShowReelIndex");
  console.log(ShowReelIndex, IDX);
  // State and Refs for Video Player
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likes, setLikes] = useState(ReelData.videoLikes);
  const [isLiked, setIsLiked] = useState(false);

  // Helper function to format large numbers (e.g., 35000 -> 35K)
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num;
  };

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleLikeClick = () => {
    //  here real time post liked worked
    var res = handleUserVidoeLikeClick(ReelData);
    if (res) {
      setIsLiked(!isLiked);
      setLikes(isLiked ? likes - 1 : likes + 1);
    }
  };

  const hanldeArrowDownClick = () => {
    setShowReelIndex(ShowReelIndex + 1)
  }

  const hanldeArrowUpClick = () => {
    setShowReelIndex(ShowReelIndex - 1)
  }

  // Component for the sidebar icons
  const SidebarIcon = ({ Icon, text, onClick, count }) => (
    <div
      className="flex flex-col items-center cursor-pointer mb-2"
      onClick={onClick}
    >
      <div className="bg-black/30 p-3 rounded-full hover:bg-black/50 transition duration-150 ease-in-out">
        <Icon className="text-white text-3xl" />
      </div>
      <span className="text-white text-sm font-semibold mt-1">
        {count ? formatNumber(count) : text}
      </span>
    </div>
  );

  return (
    <div
      className={`${
        IDX === ShowReelIndex ? "flex" : "hidden"
      } relative items-center justify-center h-screen p-4`}
    >
      {/* Arrows goes here  */}
      <div className="ssm:flex hidden flex-col gap-3 Arrows absolute right-5 top-1/2 -translate-y-1/2">
        {IDX === 0 ? (
          ""
        ) : (
          <span onClick={()=>hanldeArrowUpClick()} className="w-10 h-10 bg-gray-800 rounded-full hover:scale-95 duration-200 transition-all cursor-pointer flex justify-center items-center">
            <AiOutlineArrowUp size={"30"} />
          </span>
        )}

        <span onClick={()=>hanldeArrowDownClick()} className="w-10 h-10 bg-gray-800 rounded-full hover:scale-95 duration-200 transition-all cursor-pointer flex justify-center items-center">
          <AiOutlineArrowDown size={"30"} />
        </span>
      </div>
      <div className="relative w-full max-w-sm ssm:h-[93vh] h-[80vh] overflow-hidden rounded-xl shadow-2xl bg-black">
        {/* Video Player Section */}
        <div className="relative h-full w-full">
          <video
            ref={videoRef}
            src={ReelData.videoUrl}
            className="w-full h-full object-cover"
            loop
            playsInline
            onClick={handleVideoClick}
          />

          {/* Play/Pause Icon Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="bg-white p-2  rounded-full">
              {isPlaying ? (
                <BiPause className="text-black text-4xl" />
              ) : (
                <BsPlayFill className="text-black text-4xl" />
              )}
            </div>
          </div>

          {/* Video Content & User Info (Bottom Left) */}
          <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to from-black/60 to-transparent z-10">
            {/* User Info */}
            <div className="flex items-center mb-2">
              <img
                src={ReelData.videoCreated.ImageUrl}
                alt={ReelData.videoCreated.UserName}
                className="w-12 h-12 rounded-full border-2 border-white object-cover mr-2"
              />
              <span className="text-white font-bold mr-2">
                @{ReelData.videoCreated.UserName}
              </span>
              {ReelData.videoCreated.IsVarified && (
                <RiVerifiedBadgeFill
                  className="ssm:block hidden"
                  color="#813288"
                  size={"19"}
                />
              )}
            </div>

            {/* Video Description */}
            <p className="text-white font-semibold text-sm">
              Surat {ReelData.SurahName} | Ayat {ReelData.AyatFrom} to{" "}
              {ReelData.AyatTo}
            </p>
          </div>

          {/* Sidebar Interaction (Bottom Right) */}
          <div className="absolute bottom-4 right-4 z-10">
            <SidebarIcon
              Icon={isLiked ? FaHeart : BiHeart}
              count={likes}
              onClick={handleLikeClick}
            />
            <SidebarIcon
              Icon={GoBookmark}
              onClick={() => hanldeUserVideoSaveClick(ReelData)}
            />
            <SidebarIcon
              Icon={TbDownload}
              onClick={() => hanldeUserVideoDownload(ReelData)}
            />
            <SidebarIcon
              Icon={MdShare}
              text="Share"
              onClick={() => hanldeUserVideoShare(ReelData)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelVideo;
