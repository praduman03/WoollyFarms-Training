import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import ChatSection from '../components/Main Component/ChatSection'

const Main = () => {
  const location = useLocation()
  return (
    <div className='main-page'>
      <Sidebar />
      {location.state ? <ChatSection type = {location.state.type === 'alert' ? 'Alerts' : location.state.type === 'event' ? 'Events' : location.state.type === 'group' ? 'Group' : 'neutral' } /> : <div>loading</div>}
    </div>
  )
}

export default Main
