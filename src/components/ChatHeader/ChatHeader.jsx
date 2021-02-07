import React from 'react';
import logo from '../../logo.jpg';
import backBtn from '../../left-arrow.svg';
import more from '../../more.svg';
import './ChatHeader.css';

const ChatHeader = () => <div className="chatbot-header">
    <div className="chatbot-header__back">
        <img src={backBtn} alt={'back'} />
    </div>
    <div className="chatbot-header__profile">
        <div className="chatbot-header__profile--img">
            <img src={logo} alt={'logo'}/>
        </div>
        <div className="chatbot-header__profile--name">
            Wiki
        </div>
    </div>
    <div className="chatbot-header__options">
        <img src={more} alt={'back'} />
    </div>
</div>

export default ChatHeader;