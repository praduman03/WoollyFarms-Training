import React from 'react'
import './ChatSection.css'
import ChatBg from '../../assets/Chat_background.png'
import { AiOutlineSend } from 'react-icons/ai'

const ChatSection = ({type}) => {
  return (
    <div className='chat-section'>
      <img src={ChatBg} alt="" />

      <div className='my-msg-container'>
        <div className={`my-msg ${type === 'Alerts' ? 'alert' : type === 'Events' ? 'event' : type === 'Group' ? 'group' : 'neutral'}`}>
            My {type}
        </div>
      </div>

      <div className='chat-container'>
        <div>
            <div className={`text ${type === 'Alerts' ? 'alert' : type === 'Events' ? 'event' : type === 'Group' ? 'group' : 'neutral'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia repellat veniam alias fugit consequuntur ea beatae voluptas, et odit iure totam minima molestias nulla veritatis deserunt in fugiat. Officia, magni.</div>
        </div>
      </div>

      <div className='input-container'>
        <input type="text" />
        <AiOutlineSend />
      </div>
    </div>
  )
}

export default ChatSection
