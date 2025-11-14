import { MdShare } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import { GoBookmark } from "react-icons/go";
import { BiHeart } from "react-icons/bi";
import { useRef, useState, useMemo, useEffect } from "react";
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
import CustomVideoTag from "./CustomVideoTag";
import ReduceNumber from "../Services/ReduceNumber";

const ReelVideo = ({ ReelData, IDX }) => {
  var [ShowReelIndex, setShowReelIndex] = useGlobalState("ShowReelIndex");
  const [likes, setLikes] = useState(ReelData?.videoLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    //  here real time post liked worked
    var res = handleUserVidoeLikeClick(ReelData);
    if (res) {
      setIsLiked(!isLiked);
      setLikes(isLiked ? likes - 1 : likes + 1);
    }
  };

  const hanldeArrowDownClick = () => {
    setShowReelIndex(ShowReelIndex + 1);
  };

  const hanldeArrowUpClick = () => {
    setShowReelIndex(ShowReelIndex - 1);
  };

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
        {count ? ReduceNumber(count) : text}
      </span>
    </div>
  );

  return (
    <div
      className={`${
        IDX === ShowReelIndex ? "flex" : "hidden"
      } relative  items-center justify-center h-screen p-4`}
    >
      {/* Arrows goes here  */}
      <div className="flex z-100 flex-col gap-3 Arrows absolute right-5 top-1/2 -translate-y-1/2">
        {IDX === 0 ? (
          ""
        ) : (
          <span
            onClick={() => hanldeArrowUpClick()}
            className="w-10 h-10 bg-gray-800 rounded-full hover:scale-95 duration-200 transition-all cursor-pointer flex justify-center items-center"
          >
            <AiOutlineArrowUp size={"30"} />
          </span>
        )}

        <span
          onClick={() => hanldeArrowDownClick()}
          className="w-10 h-10 bg-gray-800 rounded-full hover:scale-95 duration-200 transition-all cursor-pointer flex justify-center items-center"
        >
          <AiOutlineArrowDown size={"30"} />
        </span>
      </div>
      <div className="relative w-full max-w-sm ssm:h-[93vh] h-[80vh] overflow-hidden rounded-xl shadow-2xl bg-black">
        {/* Video Player Section */}
        <div className="relative h-full w-full">
          <CustomVideoTag
            srcUrl={ReelData?.videoUrl}
            ShowReelIndex={ShowReelIndex}
            IDX={IDX}
          />

          {/* Video Content & User Info (Bottom Left) */}
          <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to from-black/60 to-transparent z-10">
            {/* User Info */}
            <div className="flex items-center mb-2">
              <img
                src={ReelData?.videoCreated?.ImageUrl}
                alt={ReelData?.videoCreated?.UserName}
                className="w-12 h-12 rounded-full border-2 border-white object-cover mr-2"
              />
              <span className="text-white font-bold mr-2">
                @{ReelData?.videoCreated?.UserName}
              </span>
              {ReelData?.videoCreated?.IsVarified && (
                <RiVerifiedBadgeFill
                  className="ssm:block hidden"
                  color="#813288"
                  size={"19"}
                />
              )}
            </div>

            {/* Video Description */}
            <p className="text-white font-semibold text-sm">
              Surat {ReelData?.SurahName} | Ayat {ReelData?.AyatFrom} to{" "}
              {ReelData?.AyatTo}
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
