import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import ChatSection from '../components/Main Component/ChatSection'

const Main = () => {
  const location = useLocation()

  console.log(location.state)
  return (
    <div className='main-page'>
      <Sidebar />
      {location.state.type === 'alert' ? <ChatSection type='Alerts' /> : location.state.type === 'event' ? <ChatSection type='Events' /> : location.state.type === 'group' ? <ChatSection type='Group' /> : <ChatSection type='neutral' />}
    </div>
  )
}

export default Main
