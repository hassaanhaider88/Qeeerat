import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ReelVideo from "../Components/ReelVideo";
import { toast } from "react-toastify";
import { handleUserGettingSingleVidoe } from "../Services/MoreOptions";

const SinlgeVideo = () => {
  const [VideoData, setVideoData] = useState({});
  var [searchParams] = useSearchParams();
  var navigate = useNavigate();
  useEffect(() => {
    var VideoID = searchParams.get("id");
    console.log(VideoID);
    if (!VideoID) {
      toast.info("Video Not Found");
      navigate("/");
    } else {
      const Res = handleUserGettingSingleVidoe(VideoID);
      console.log(Res);
      setVideoData(Res);
    }
    console.log(VideoID);
  }, [searchParams]);
  //

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black">
      <ReelVideo ReelData={VideoData} />
    </div>
  );
};

export default SinlgeVideo;
