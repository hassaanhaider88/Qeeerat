import { LiaSadTear } from 'react-icons/lia'
import { hanldeBlockPostCreater, hanldeReportPostClick, hanldeUserFollowClick, hanldeUserNotInterestInPost, hanldeVideoMuteClick } from '../Services/MoreOptions'

const MoreOptionsDiv = ({IsShowMoreOptions,setIsShowMoreOptions}) => {
    

  return (
    <div className='AllOptions relative z-20 w-full py-2 bg-gray-900 text-white px-4 flex flex-col justify-center items-center rounded-3xl'>
      <div onClick={()=>{hanldeUserNotInterestInPost();setIsShowMoreOptions(!IsShowMoreOptions)}} className="Option flex items-center w-full rounded-3xl py-2 px-3 gap-3 hover:bg-gray-500 cursor-pointer duration-300 text-lg transition-all">
           <LiaSadTear />
          <p>Not Ineterested in post</p>
      </div>

      <div onClick={()=>{hanldeUserFollowClick();setIsShowMoreOptions(!IsShowMoreOptions)}}  className="Option flex items-center w-full rounded-3xl py-2 px-3 gap-3 hover:bg-gray-500 cursor-pointer duration-300 text-lg transition-all">
           <LiaSadTear />
          <p>Follow UserName</p>
      </div>

      <div onClick={()=>{hanldeVideoMuteClick();setIsShowMoreOptions(!IsShowMoreOptions)}}  className="Option flex items-center w-full rounded-3xl py-2 px-3 gap-3 hover:bg-gray-500 cursor-pointer duration-300 text-lg transition-all">
           <LiaSadTear />
          <p>Mute</p>
      </div>

      <div onClick={()=>{hanldeBlockPostCreater();setIsShowMoreOptions(!IsShowMoreOptions)}}  className="Option flex items-center w-full rounded-3xl py-2 px-3 gap-3 hover:bg-gray-500 cursor-pointer duration-300 text-lg transition-all">
           <LiaSadTear />
          <p>Block UserName</p>
      </div>

      <div onClick={()=>{hanldeReportPostClick();setIsShowMoreOptions(!IsShowMoreOptions)}}  className="Option flex items-center w-full rounded-3xl py-2 px-3 gap-3 hover:bg-gray-500 cursor-pointer duration-300 text-lg transition-all">
           <LiaSadTear />
          <p>Report Post</p>
      </div>
      

    </div>
  )
}

export default MoreOptionsDiv
