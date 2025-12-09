import React, { useEffect, useState } from "react";

import usePostData from "../Store/usePostData.jsx";
import { handleFetchMorePosts } from "../Services/MoreOptions.js";
import { useGlobalState } from "@hmk_codeweb88/useglobalstate";
import HomeReels from "./HomeReels.jsx";
// import useUserData from "../store/useUserData.jsx";

const HomeFeed = () => {
  const { postData, setPostData } = usePostData();
  // const { userData } = useUserData();

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
      <HomeReels />
    </div>
  );
};

export default HomeFeed;
