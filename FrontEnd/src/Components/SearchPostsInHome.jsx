import React, { useState } from 'react'
import SelectSurah from './SelectSurah'
import CtmButton from './CtmButton';
import { handleUserSearchPosts } from '../Services/MoreOptions';
import usePostData from '../Store/usePostData';

const SearchPostsInHome = () => {
     const [SurahName, setSurahName] = useState("");
     const [AyatFrom,setAyatFrom] = useState(1);
     const [AyatTo,setAyatTo] = useState(1);
     const { setPostData } = usePostData();
const handleSearchPosts = () =>{
  if(SurahName === ""){
    alert('Please select a Surah Name')
    return;
  }
   var Vale =  handleUserSearchPosts(SurahName, AyatFrom, AyatTo,setPostData);
   console.log(Vale)
}
  return (
    <div className='w-full py-2 px-5'>
      <div className="UserIamgeAndInput flex flex-nowrap gap-3 items-center">
        <img className='w-20 h-20 rounded-full' src="./QeeeratLogoWithBG.png" alt="" />
        <div className='flex flex-wrap justify-evenly items-center gap-2 w-full'>
            <SelectSurah SurahName={SurahName} setSurahName={setSurahName}/>
            
        <input value={AyatFrom} onChange={(e)=>setAyatFrom(e.target.value)} placeholder='Ayat From' className='py-2 px-4 active:outline-white rounded-3xl text-gray-300 outline-none active:outline-2' type="number" />
        <input value={AyatTo} onChange={(e)=>setAyatTo(e.target.value)} placeholder='Ayat To' className='py-2  px-4 active:outline-white rounded-3xl text-gray-300 outline-none active:outline-2' type="number" />
         <span onClick={handleSearchPosts}>
            <CtmButton Text={'Search'} />
         </span>
        
        
        </div>
      </div>
      
    </div>
  )
}

export default SearchPostsInHome
