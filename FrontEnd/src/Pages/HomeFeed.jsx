import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import HomeFeedPost from '../Components/HomeFeedPost'
import PostData from '../DummyData/PostData.js'

const HomeFeed = () => {
  console.log(PostData)
  return (
    <div className=' min-h-[300vh] w-full text-white bg-black'>
      <div className='flex justify-between px-5 py-4 items-center'>
        <div className='flex gap-8 items-center justify-center text-2xl'>
          <BiArrowBack className='cursor-pointer w-10 h-10 rounded-full hover:bg-gray-400 duration-200 transition-all p-2'/>
          <h1>Post</h1>
        </div>
<div className='flex gap-2 items-center justify-center'>
  <button className='py-1 px-4 rounded-full bg-black border-2 cursor-pointer active:scale-95 duration-200 transition-all border-[#d8c9c9]'>Reply</button>
  
    <svg className='cursor-pointer w-8 h-8 rounded-full hover:bg-gray-400 duration-200 transition-all p-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M7 3V6H3V8H7V11H10V3H7ZM12 8H21V6H12V8ZM17 13V16H21V18H17V21H14V13H17ZM12 18H3V16H12V18Z"></path></svg>
</div>
      </div>
      
      {/* Here the real feed and post goes */}
      <div className='px-3 md:px-10 flex flex-col gap-4'>
        {
        PostData.map((post,idx)=>{
        return <HomeFeedPost post={post} key={idx}/>
        })
      }
      </div>
    </div>
  )
}

export default HomeFeed
