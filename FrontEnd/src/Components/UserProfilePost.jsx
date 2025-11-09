import React from 'react'
import SinlgeVidoeCard from './SinlgeVidoeCard'
import PostData from '../DummyData/PostData'

const UserProfilePost = ({WhichTypeOfPost}) => {

  return (
    <div className='w-full  flex justify-center items-center gap-5 py-5 flex-col'>
       {
        PostData.map((post,idx)=>{
          return(
            <div key={idx} className="w-full h-[80vh] bg-[#000000] rounded-lg flex justify-center items-center">
              <SinlgeVidoeCard post={post}/>
            </div>
          )
        })
       }
    </div>
  )
}

export default UserProfilePost
