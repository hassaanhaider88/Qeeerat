import React from 'react'
import CustomVideoTag from '../Components/CustomVideoTag'

const Login = () => {
  return (
    <div className='w-full h-full flex  justify-center items-center bg-black'>
     <CustomVideoTag srcUrl={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'} Thumbnail={'https://i.pinimg.com/236x/fd/8a/78/fd8a78da577cfd71e8af31a21f7d8d1e.jpg'}/>
    </div>
  )
}

export default Login
