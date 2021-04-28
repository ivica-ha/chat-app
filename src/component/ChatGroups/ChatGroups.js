import React from 'react';
import './style.scss';

const MyComponent = () => {
    return (
        <div className='chat-group col-30'>
            <div className="chat-group-single active">
                Chat Group 1
            </div>
            <div className="chat-group-single">
                Chat Group 1
            </div>
            <div className="chat-group-single">
                Chat Group 1
            </div>
        </div>
    );
};

export default MyComponent;
