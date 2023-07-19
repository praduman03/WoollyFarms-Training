import React, { useEffect, useState } from 'react'
import './ChatSection.css'
import ChatBg from '../../assets/Chat_background.png'
import { AiOutlineSend } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const ChatSection = ({type}) => {
  const [body, setBody] = useState('')
  const [alert, setAlert] = useState('')
  const [event, setEvent] = useState('')
  const [group, setGroup] = useState('')
  const [error, setError] = useState('')

  const userName = sessionStorage.getItem('user').name
  const userId = sessionStorage.getItem('user').id
  const navigate = useNavigate()

  const postChat = () => {
    fetch(process.env.REACT_APP_DOMAIN + "/group", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: userName,
        body,
        type,
        user_id: userId,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error);
        window.alert(data.error);
      } else {
        navigate("/main");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    const fetchChat = async () => {
      const response = await fetch(process.env.REACT_APP_DOMAIN + '/group')
      const json = await response.json()
      if(response.ok) {
        if(type === 'Alerts') {
          setAlert(json.body)
        }
        else if(type === 'Events') {
          setEvent(json.body)
        }
        else if(type === 'Group') {
          setGroup(json.body)
        }
      }
      else {
        setError(json.error)
      }
    }

    fetchChat()
  }, [type])

  console.log(alert, event, group, error)

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
        <input type="text" placeholder='Enter text' onChange={(e) => setBody(e.target.value)} />
        <AiOutlineSend onClick={postChat} />
      </div>
    </div>
  )
}

export default ChatSection
