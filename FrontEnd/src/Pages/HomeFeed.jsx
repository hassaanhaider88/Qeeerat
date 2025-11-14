import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import HomeFeedPost from "../Components/HomeFeedPost";
import PostData from "../DummyData/PostData.js";
import SearchPostsInHome from "../Components/SearchPostsInHome.jsx";
import usePostData from "../Store/usePostData.jsx";
import { handleFetchMorePosts } from "../Services/MoreOptions.js";
import ReelVideo from "../Components/ReelVideo.jsx";
import { useGlobalState } from "@hmk_codeweb88/useglobalstate";

const HomeFeed = () => {
  const { postData, setPostData } = usePostData();
  const [ShowReelIndex, setShowReelIndex] = useGlobalState("ShowReelIndex", 0, {
    persist: true,
  });
  useEffect(() => {
    // Fetch post data from an API or use dummy data
    handleFetchMorePosts(setPostData);
    setShowReelIndex(0);
  }, []);


  return (
    <div className=" min-h-screen w-full text-white bg-black">
      {/* Here the real feed and post goes */}
      <div className="px-3 md:px-10 flex flex-col gap-4">
        
        {postData.map((post, idx) => {
          return <ReelVideo ReelData={post} key={idx} IDX={idx} />;
        })}
      </div>
    </div>
  );
};

export default HomeFeed;
