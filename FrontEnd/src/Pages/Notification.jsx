import React, { useEffect } from 'react'
import { IoSettings } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import  timeAgo from '../Services/TimeAgo'
import UseData from '../DummyData/User'
import { CiBookmarkRemove } from 'react-icons/ci'
const Notification = () => {

  useEffect(() => {
    localStorage.setItem("QeeeratUserData", JSON.stringify({
      UseData
    }));
  }, [])

  var NotificationDummyData = [
  {
    id: 1,
    description: "You have received a new message from John.",
    time: "2025-10-31T13:10:00Z",
    IsReaded: false,
  },
  {
    id: 2,
    description: "Ali liked your recent post.",
    time: "2025-10-31T13:10:00Z",
    IsReaded: false,
  },
  {
    id: 3,
    description: "Sara started following you.",
    time: "2025-10-31T13:10:00Z",
    IsReaded: true,
  },
  {
    id: 4,
    description: "Your password was changed successfully.",
    time: "2025-10-31T13:10:00Z",
    IsReaded: true,
  },
  {
    id: 5,
    description: "Reminder: Meeting scheduled for tomorrow at 10 AM.",
    time: "2025-10-31T13:10:00Z",
    IsReaded: false,
  },

  ]

  const hanldeRemoveNotyClick = (item) => {
   var RemainingNoty = NotificationDummyData.splice(NotificationDummyData.indexOf(item.id), 1);
    

    console.log(RemainingNoty);
  }

  return (
    <div className='w-full min-h-screen bg-black text-white'>
      <div className='w-full flex justify-between px-5 py-4 text-2xl font-bold'>
        <h1>Notification</h1>
        <Link to="/settings">
        <IoSettings size={'20'}/>
        </Link>
      </div>
      <div className='w-full flex sm:px-20 px-10 md:px-40 flex-col gap-1 justify-center items-center'>
        {
          NotificationDummyData.map((item,idx) => (
            <div onDoubleClick={()=>hanldeRemoveNotyClick(item)} title='Double Tap To Del' className={` ${item.IsReaded ? "hidden" : "flex"} w-full relative  justify-center items-center border-b border-white`}>
              <div key={item.id} className='flex px-3 py-1 rounded-3xl cursor-pointer items-center justify-between w-full hover:bg-gray-900 duration-200 transition-all '>
              <img src="./QeeeratLogo2.png" className='w-20 h-20 rounded-full' alt="" />
              <p className='text-sm text-left w-full ml-2'>{item.description}</p>
              <span className='text-xs text-gray-500 text-nowrap'>{timeAgo(item.time)}</span> 
            </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Notification
