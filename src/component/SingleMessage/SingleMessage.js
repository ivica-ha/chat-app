import React from "react";
import "./style.scss";

import defaultImage from "../../images/grogu.jpeg";

const SingleMessage = ({currentUser}) => {
    return (
        <div className={`message d-flex flex-wrap p-relative ${currentUser ? "current-user" : ""}`}>
            <div className="message--avatar">
                <img src={defaultImage} alt="Jean"/>
            </div>
            <div className="message--info">
                <h4>Jean</h4>
                <p>Hello</p>
            </div>
            <div className="message--info">
                <h4>Jean</h4>
                <p>How are you. </p>
            </div>
        </div>
    );
};

export default SingleMessage;