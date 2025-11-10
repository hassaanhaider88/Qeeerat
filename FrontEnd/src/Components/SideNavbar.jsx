import { BiDotsVertical } from 'react-icons/bi'
import { FaRegUser } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { IoMdAdd } from 'react-icons/io'
import { IoNotificationsOutline, IoSettings } from 'react-icons/io5'
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
    <div className='lg:w-[25%] sticky border-r-2 border-gray-500 overflow-hidden -top-1 sm:flex flex-col justify-between h-screen md:w-[32%] text-nowrap text-white py-3 px-5 hidden  w-0 sm:w-[150px] bg-black'>
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
       <Link to={'/settings'} className='flex mb-2 cursor-pointer flex-col md:flex-row gap-3 w-full justify-start items-center'>
        <IoSettings size={'25'}/>
       </Link>
    </div>
  )
}

export default SideNavbar
