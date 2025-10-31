import React,{useEffect} from 'react'
import { BiArrowBack } from 'react-icons/bi'
import HomeFeedPost from '../Components/HomeFeedPost'
import PostData from '../DummyData/PostData.js'
import SearchPostsInHome from '../Components/SearchPostsInHome.jsx'
import usePostData from '../Store/usePostData.jsx'
import { handleFetchMorePosts } from '../Services/MoreOptions.js'

const HomeFeed = () => {
  const { postData,setPostData } = usePostData();
  useEffect(() => {
    // Fetch post data from an API or use dummy data
    handleFetchMorePosts(setPostData)
  },[])

  return (
    <div className=' min-h-[300vh] w-full text-white bg-black'>
      <SearchPostsInHome/>
      
      {/* Here the real feed and post goes */}
      <div className='px-3 md:px-10 flex flex-col gap-4'>
        {
        postData.map((post,idx)=>{
        return <HomeFeedPost post={post} key={idx}/>
        })
      }
      </div>
    </div>
  )
}

export default HomeFeed
