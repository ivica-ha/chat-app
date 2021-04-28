import React from 'react';
import SingleMessage from "../SingleMessage/SingleMessage";
import MessageInput from "../ChatInput/ChatInput";
import './style.scss';

const ChatView = (messages, drone) => {
    return (
        <div className='chat flex-wrap p-relative d-flex col-70'>
            <SingleMessage />
            <SingleMessage currentUser={true} />
            <MessageInput />
        </div>
    );
};

export default ChatView;
