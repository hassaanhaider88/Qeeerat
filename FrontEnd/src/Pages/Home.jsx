import React from 'react'
import SideNavbar from '../Components/SideNavbar'
import HomeFeed from './HomeFeed'
import { Route, Routes } from 'react-router-dom'
import Explore from './Explore'
import Notification from './Notification'
import Profile from './Profile'
import AddNewPrompt from './AddNewPrompt'
import MobileBar from '../Components/MobileBar'
import Premium from './Premium'
import Login from './Login'
import SignUp from './SignUp'
const HomeWithLogin = () => {
  return (
    <div className='w-full min-h-screen flex'>
     <SideNavbar/>
     <MobileBar/>
     <Routes>
      <Route path='/' element={<HomeFeed/>} />
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/notification' element={<Notification/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/add-new' element={<AddNewPrompt/>}/>
      <Route path='/premium' element={<Premium/>}/>

      <Route path='/login' element={<Login/>} />
      <Route path='/sign-up' element={<SignUp/>} />

      <Route/>
     </Routes>
    </div>
  )
}

export default HomeWithLogin
