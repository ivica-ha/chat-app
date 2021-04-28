import React, {useState} from 'react';
import './global-style.scss';
import Menu from './component/Menu/Menu';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Chat from "./component/Chat/Chat";
import Profile from "./component/Profile/Profile";
import Settings from "./component/Settings/Settings";
import useDocumentBodyClass from "./hooks/useDocumentBodyClass";

function App() {

    const theme = localStorage.getItem('theme');
    useDocumentBodyClass(theme);

    const [member, setMember] = useState({});
    const [messages, setMessages] = useState([]);

    return (
        <>
            <Router>
                <Menu/>
                <div className='container d-flex app-container'>
                    <Switch>
                        <Route path="/chat">
                            <Chat />
                        </Route>
                        <Route path="/profile">
                            <Profile/>
                        </Route>
                        <Route path="/settings">
                            <Settings/>
                        </Route>
                        <Route exact path="/">
                            <Chat />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
