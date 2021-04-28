import React, {useState} from 'react';
import './style.scss';

const MessageInput = () => {
    const [message, setMessage] = useState();

    return (
        <div className='chat-container d-flex'>
            <textarea onChange={(e) => setMessage(e.target.value)} placeholder='Type something here...' className='col-80 chat-input'/>
            <button className='chat-send d-flex'>
                <svg height="16px" width="16px" enableBackground="new 0 0 512 512" fill="currentColor" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m481.51 210.34-413.09-171.41c-17.403-7.222-37.063-4.045-51.309 8.287-14.246 12.334-20.204 31.337-15.548 49.595l40.594 159.19-40.594 159.19c-4.656 18.258 1.301 37.261 15.547 49.595 14.273 12.358 33.938 15.495 51.31 8.287l413.09-171.41c18.808-7.804 30.492-25.302 30.492-45.665s-11.684-37.861-30.492-45.665zm-11.499 63.62-413.09 171.41c-6.947 2.881-14.488 1.665-20.175-3.259-5.686-4.923-7.971-12.212-6.113-19.501l38.659-151.6h149.06c8.285 0 15.001-6.716 15.001-15.001s-6.716-15.001-15.001-15.001h-149.06l-38.66-151.6c-1.858-7.288 0.427-14.578 6.113-19.501s13.225-6.141 20.174-3.259l413.09 171.41c11.125 4.616 11.99 14.91 11.99 17.955s-0.865 13.339-11.99 17.955z"/></svg>
            </button>
        </div>
    );
};

export default MessageInput;
