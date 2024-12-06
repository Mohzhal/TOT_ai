import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Contextt';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const {onSent,prevPrompt,setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt = async(prompt) => {
      setRecentPrompt(prompt)  
      onSent(prompt)
    }

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={() => setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="Menu Icon" />
        <div onClick={() => newChat()} className="new-chat">
          <img className="icon" src={assets.plus_icon} alt="Plus Icon" />
          {extended? <p>New Chat</p> : null}
        </div>
        {extended?
        <div className="recent">
          <p className="recent-title">Recent</p>
          {prevPrompt.map((item,index) => {
            return (
              <div onClick={() => loadPrompt(item)} className="recent-entry">
              <img className="icon" src={assets.message_icon} alt="Message Icon" />
              <p>{item.slice(0,18)} ...</p>
              </div>
            )
          })}
          
        </div>
        :
        null
    }
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img className="icon" src={assets.question_icon} alt="Question Icon" />
         {extended?  <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img className="icon" src={assets.history_icon} alt="History Icon" />
          {extended?<p>Activity</p> : null }
        </div>
        <div className="bottom-item recent-entry">
          <img className="icon" src={assets.setting_icon} alt="Setting Icon" />
         {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
