import { BiDotsVertical } from 'react-icons/bi'
import { FaRegUser } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { IoMdAdd } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import { MdOutlineExplore, MdOutlineWorkspacePremium } from 'react-icons/md'
import { Link } from 'react-router-dom'

const SideNavbar = () => {
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
  return (
    <div className='lg:w-[25%] sticky border-r-2 border-gray-500 overflow-x-hidden -top-1 sm:flex flex-col justify-between h-screen md:w-[32%] text-nowrap text-white py-3 px-5 hidden  w-0 sm:w-[150px] bg-black'>
       <div>
        <div className="LogoGoesHere flex justify-center items-center md:justify-start w-full">
        <img className='h-30 ' src="./QeeeratLogoWithBG.png" alt="" />
       </div>
      <div className='w-full flex gap-2 py-3 flex-col'>
     {
      SidebarOptions.map((option,idx)=>{
   return <Link key={idx} to={option.redirectTo}  className="flex text-2xl w-full gap-4 hover:bg-[#da55e69f] duration-300 transition-all cursor-pointer py-3 px-2 justify-center md:justify-start items-center rounded-4xl">
      <span title={option.Name}>{option.Icon}</span>
      <h1 className='hidden md:block'>{option.Name}</h1>
     </Link>
      })
     }
      </div>
       </div>
       {/* show only when user is logged in  */}
       <div className='flex flex-col md:flex-row gap-3 w-full justify-evenly items-center'>
        <Link to={'/login'} className='py-1 hover:scale-105 px-4 rounded-4xl  duration-100 transition-all cursor-pointer active:scale-95 outline-3 outline-[#5f55e69f] hover:outline-[#da55e69f] '>Login</Link>
        <Link to={'sign-up'} className='py-2 px-4 rounded-4xl  bg-[#da55e69f] hover:bg-[#da55e6d3] duration-100 transition-all cursor-pointer active:scale-95 hover:outline-3 outline-[#5f55e69f] '>Sign Up</Link>
       </div>
    </div>
  )
}

export default SideNavbar
