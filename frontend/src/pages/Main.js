import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import ChatSection from '../components/Main Component/ChatSection'

const Main = () => {
  const location = useLocation()

  console.log(location.state)
  return (
    <div className='main-page'>
      <Sidebar />
      <ChatSection />
    </div>
  )
}

export default Main
