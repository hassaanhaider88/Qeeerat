import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsBasket } from 'react-icons/bs';
import SinlgeVidoeCard from '../Components/SinlgeVidoeCard';
import SearchPostsInHome from '../Components/SearchPostsInHome';

const Explore = () => {
 const [SearchSomething,setSearchSomething] = useState('');
 const [ShowSearchResult,setShowSearchResult] = useState(false);
 const handleUserSearch =()=>{
  if(SearchSomething.split("").length <= 3) return alert('Search Atleast 3 latters')
    else{
  setShowSearchResult(true);
  setSearchSomething('')
  }
 }
  return (
    <div className='w-full px-5 md:px-10 min-h-screen bg-black text-white'>
      {/* <div className="UserSearchForVideos mt-5">
        <div className="flex items-center justify-center  w-[70%] relative left-1/2 -translate-x-1/2 py-2 px-3 rounded-3xl bg-gray-800">
          <BiSearch size={'30px'}/>
          <input required value={SearchSomething} onChange={(e)=>setSearchSomething(e.target.value)} className='outline-none text-gray-200 py-2 w-full pl-4' type="text " placeholder='Search for......' />
          <button onClick={handleUserSearch} className='py-2 bg-[#da55e69f] px-4  rounded-3xl cursor-pointer duration-300 transition-all hover:scale-105'>Search</button>
        </div>
      </div> */}
      <SearchPostsInHome/>
      {/* all videos and searched video will be shown */}
      {
        ShowSearchResult !== true && <div className='w-full gap-5 h-full flex flex-col justify-center items-center'>
          <BsBasket className='w-20 h-20'/>
          <p>Nothing To Show</p>
        </div> }
   { ShowSearchResult &&
      <div className='flex justify-center py-10 flex-wrap gap-3'>
        
        {
          [1,22,22,2,2,2,2,2,2,2,2,2,1,22,22,2,2,2,2,2,2,2,2,2,1,22,22,2,2,2,2,2,2,2,2,2].map((ele,idx)=>{
            return <div key={idx} className='w-[250px] h-[400px] rounded-3xl overflow-hidden cursor-pointer hover:scale-105 duration-400 transition-all bg-[#da55e69f]'>
              <SinlgeVidoeCard/>
                   {/* <video className='w-full h-full' src="./DemmoVideo.mp4" controls></video> */}

            </div>
          })
        }
      </div>
           }
    </div>
  )
}

export default Explore
