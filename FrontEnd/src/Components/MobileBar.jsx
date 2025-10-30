import React, { useEffect, useState } from 'react'
import { BiNotification, BiUser } from 'react-icons/bi'
import { CgAdd } from 'react-icons/cg'
import { FaRegUser } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { IoMdAdd } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import { MdOutlineExplore, MdOutlineWorkspacePremium } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const MobileBar = () => {
 const SidebarOptions = [
    {
      Name : "Home",
      Icon : <GoHome />,
      redirectTo : "/"
    },
    {
      Name : "Explore",
      Icon : <MdOutlineExplore />,
      redirectTo : "/explore"
    },
    {
      Name : "Notification",
      Icon : <IoNotificationsOutline />,
      redirectTo : "/notification"
    },
    {
    Name : "Add New",
              Icon : <IoMdAdd />,
              redirectTo : "/add-new"
            },
     {
    Name : "Premium",
    Icon : <MdOutlineWorkspacePremium />,
    redirectTo : "/premium"
    
        },
    {
      Name : "Profile",
      Icon : <FaRegUser />,
      redirectTo : "/profile"
    }
  ]
 const Location = useLocation()
 const [SelectOtp,setSelectOpt] = useState(Location.pathname)

 useEffect(()=>{
     setSelectOpt(Location.pathname)
 },[Location.pathname])
  return (
    <div  className='sm:hidden px-5 z-30 flex justify-evenly  fixed w-[95%] py-3 rounded-4xl bg-black bottom-5 -translate-x-1/2 left-1/2'>
      {
        SidebarOptions.map((option,idx)=>{
            return <Link title={option.Name} key={idx} to={option.redirectTo} className={` ${SelectOtp === option.redirectTo ? "bg-[#DA55E6]" : ""} ssm:w-12 w-8 h-8 text-white ssm:h-12 flex justify-center items-center  rounded-4xl ssm:text-2xl text-lg cursor-pointer hover:bg-[#DA55E6] duration-300 transition-all`}>
        {option.Icon}
      </Link>
        })
      }
      
      
    </div>
  )
}

export default MobileBar
