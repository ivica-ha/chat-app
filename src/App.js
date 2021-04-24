import React from 'react';
import './global-style.scss';
import Message from './component/Message/Message';
import Menu from './component/Menu/Menu';
import ChatGroups from "./component/ChatGroups/ChatGroups";

function App() {
    return (
        <>
            <Menu/>
            <div className='container d-flex app-container'>
                <ChatGroups/>
                <div className='messages col-70'>
                    <Message key={1}/>
                    <Message key={2} currentUser={true}/>
                </div>
            </div>
        </>
    );
}

export default App;
