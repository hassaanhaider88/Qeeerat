import React, { useEffect, useRef, useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";

const CustomVideoTag = ({ srcUrl, ShowReelIndex, IDX }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hoverProgress, setHoverProgress] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const progressBarRef = useRef(null);
  const intervalRef = useRef(null);

  // Update progress while playing
  const updateProgress = () => {
    if (videoRef.current && videoRef.current.duration) {
      const value =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(value || 0);
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const startProgressLoop = () => {
    stopProgressLoop();
    intervalRef.current = setInterval(updateProgress, 300);
  };

  const stopProgressLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      startProgressLoop();
    } else {
      video.pause();
      setIsPlaying(false);
      stopProgressLoop();
    }
  };

  // Seek when user drags the range input
  const handleSeek = (e) => {
    const value = e.target.value;
    if (videoRef.current) {
      const newTime = (videoRef.current.duration * value) / 100;
      videoRef.current.currentTime = newTime;
      setProgress(value);
    }
  };

  // Handle hover preview highlight
  const handleMouseMove = (e) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setHoverProgress(percentage);
  };

  const handleMouseLeave = () => {
    setHoverProgress(null);
  };

  // Reset on end
  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      stopProgressLoop();
    };
    if (video) video.addEventListener("ended", handleEnded);
    return () => {
      if (video) video.removeEventListener("ended", handleEnded);
      stopProgressLoop();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (IDX === ShowReelIndex) {
      video.play();
      setIsPlaying(true);
      startProgressLoop();
    } else {
      video.pause();
      setIsPlaying(false);
      stopProgressLoop();
    }
  }, [ShowReelIndex, IDX]);

  return (
    <div className="relative sm:w-[400px] w-[250px] ssm:w-[300px] my-4 h-[80vh] md:h-screen bg-black overflow-hidden rounded-xl group select-none">
      {/* Video */}
      <video
        ref={videoRef}
        src={srcUrl}
        // onClick={()=>hanldeVideoClick(videoRef)}
        onClick={togglePlayPause}
        className="w-full h-full object-cover cursor-pointer"
        playsInline
        controls={false}
      ></video>

      {/* Play/Pause Overlay */}
      <div
        // onClick={()=>hanldeVideoClick(videoRef)}
        onClick={togglePlayPause}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        {isPlaying ? (
          <BiPause className="text-white text-6xl drop-shadow-lg" />
        ) : (
          <BiPlay className="text-white text-6xl drop-shadow-lg" />
        )}
      </div>

      {/* Progress Bar */}
      <div
        ref={progressBarRef}
        className="absolute bottom-1 left-0 w-full h-1.5 bg-gray-700/40 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hover Preview Highlight */}
        {hoverProgress !== null && (
          <div
            className="absolute top-0 left-0 h-full bg-white/30"
            style={{ width: `${hoverProgress}%` }}
          ></div>
        )}

        {/* Actual Progress */}
        <div
          className="absolute top-0 left-0 h-full bg-white transition-all duration-150"
          style={{ width: `${progress}%` }}
        ></div>

        {/* Hidden Range Input (for seeking) */}
        <input
          type="range"
          value={progress}
          onChange={handleSeek}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="relative bottom-[380px] left-2 ">
          {Math.floor(currentTime)}s
        </div>
      </div>
    </div>
  );
};

export default CustomVideoTag;
