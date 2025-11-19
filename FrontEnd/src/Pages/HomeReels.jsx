import { MdOutlineScreenShare } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { BsCloudArrowDown } from "react-icons/bs";
import { BsBoxArrowInDown } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import CustomVideoTag from "../Components/CustomVideoTag";
import ReduceNumber from "../Services/ReduceNumber";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import PostData from "../DummyData/PostData";
import { toast } from "react-toastify";
import {
  handleUserVidoeLikeClick,
  hanldeUserVideoDownload,
  hanldeUserVideoShare,
} from "../Services/MoreOptions";

const HomeReels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [IsVideoLiked, setIsVideoLiked] = useState(false);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const videoRef = useRef(null);

  const hanldeLikeClick = (videoData) => {
    var Res = handleUserVidoeLikeClick(videoData);
    if (Res) {
      setIsVideoLiked(!IsVideoLiked);
    } else {
      toast.error("Something Went Wrong");
    }
  };

  const handleDownloadClick = (videoData) => {
    var Res = hanldeUserVideoDownload(videoData);
    if (Res) {
      toast.success("Successfully Downloaded!!");
    } else {
      toast.error("Something Went Wrong");
    }
  };

  const handleShareClick = (videoData) => {
    var Res = hanldeUserVideoShare(videoData);
    if (Res) {
      toast.success("Successfully Shared!!");
    } else {
      toast.error("Something Went Wrong");
    }
  };
  // Navigate to next video
  const goToNext = () => {
    if (isTransitioning) return;
    if (currentIndex < PostData.length - 1) {
      setIsTransitioning(true);
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Navigate to previous video
  const goToPrevious = () => {
    if (isTransitioning) return;
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Handle mouse wheel scroll
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        goToNext();
      } else if (e.deltaY < 0) {
        goToPrevious();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentIndex, isTransitioning]);

  // Handle touch swipe for mobile
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        goToNext();
      } else if (e.key === "ArrowUp") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isTransitioning]);

  const currentVideo = PostData[currentIndex];

  return (
    <div
      ref={containerRef}
      className="relative cursor-pointer w-full h-screen overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="h-full flex justify-center items-center flex-col">
        {/* Video Container with Transition */}
        <div
          className="absolute z-0 inset-0 transition-transform duration-500 ease-out"
          style={{
            transform: `translateY(-${currentIndex * 100}vh)`,
          }}
        >
          {PostData.map((video, index) => (
            <div
              key={video.id}
              className="relative z-10 w-full h-screen flex items-center justify-center"
            >
              {/* Video Background */}
              <CustomVideoTag
                srcUrl={video.videoUrl}
                IDX={index}
                ShowReelIndex={currentIndex}
              />

              {/* Video Info - Bottom Left */}
              <div className="absolute md:bottom-0 bottom-15 left-0 p-6 pb-5 max-w-md z-10">
                <div className="flex items-center mb-2">
                  <img
                    src={video?.videoCreated.ImageUrl}
                    alt={video?.videoCreated.UserName}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover mr-2"
                  />
                  <span className="text-white font-bold mr-2">
                    @{video?.videoCreated.UserName}
                  </span>
                  {video?.videoCreated?.IsVarified && (
                    <RiVerifiedBadgeFill
                      className="ssm:block hidden"
                      color="#813288"
                      size={"19"}
                    />
                  )}
                </div>
                <p className="text-white text-sm leading-relaxed mb-4">
                  Surah {video.SurahName} From {video.AyatFrom} To{" "}
                  {video.AyatTo}
                </p>
              </div>

              {/* Action Buttons - Right Side */}
              <div className="absolute md:right-20 right-10 md:bottom-10 bottom-20 flex flex-col gap-6 z-10">
                {/* Like Button */}
                <button
                  onClick={() => hanldeLikeClick(video)}
                  className="flex flex-col items-center gap-1 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-white/20 group-active:scale-90">
                    {IsVideoLiked ? (
                      <AiFillLike size={25} />
                    ) : (
                      <BiLike size={25} />
                    )}
                  </div>
                  <span className="text-white text-xs font-semibold">
                    {ReduceNumber(video.videoLikes)}
                  </span>
                </button>

                {/* Downlaod Button */}
                <button
                  onClick={() => handleDownloadClick(video)}
                  className="flex flex-col items-center gap-1 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-white/20 group-active:scale-90">
                    <BsCloudArrowDown size={25} />
                  </div>
                  <span className="text-white text-xs font-semibold">
                    {/* {video.comments} */}
                  </span>
                </button>

                {/* Share Button */}
                <button
                  onClick={() => handleShareClick(video)}
                  className="flex flex-col items-center gap-1 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-white/20 group-active:scale-90">
                    <MdOutlineScreenShare size={25} />
                  </div>
                  <span className="text-white text-xs font-semibold">
                    {/* {video.shares} */}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Right Side */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 md:flex hidden flex-col gap-4 z-20">
        {/* Up Arrow */}
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all hover:bg-white/30 active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        {/* Down Arrow */}
        <button
          onClick={goToNext}
          disabled={currentIndex === PostData.length - 1}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all hover:bg-white/30 active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-1 z-20">
        {PostData.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-white" : "w-1 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Swipe Hint for Mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs z-20 md:hidden">
        Swipe up or down
      </div>
    </div>
  );
};

export default HomeReels;
