import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import imgAvatar from './../../datas/img/user.png';
import { getValueFromStorageSignin } from '../../storage/signin-storage';
import "./Signin.css"

const Signin = ({ onSignIn }) => {
    const [username, setUsername] = useState('');

    const handleClick = (e) => {
        if (!isUsernameCorrect()) {
            e.preventDefault();
        } else {
            onSignIn(username);
        }
    }

    const isUsernameCorrect = () => {
        if (username.length === 0) {
            alert("Please enter username for log-in.");
            return false;
        }
        else if(username.length < 4 ) {
            alert("Please enter valid username for log-in.");
            return false;
        }
        else if(username.length > 16) {
            alert("Please enter valid username for log-in.");
            return false;
        }
        return true;
    }

    if (getValueFromStorageSignin() === "true") {
        return (
            <Navigate to="/x-course-task/books"/>
        );
    } else {
        return (
            <main className="signin-container">
                <form id="signinForm">
                    <fieldset className="field">
                        <div id="imgBorder">
                            <img src={imgAvatar} alt="avatar" />
                        </div>
                    </fieldset>
                    <fieldset className="field">
                        <p>Username</p>
                    </fieldset>
                    <fieldset className="field">
                        <input type="text" onChange={e => {setUsername(e.target.value.trim())}} placeholder="Type username" />
                    </fieldset>
                    <fieldset className="field">
                        <Link to="/x-course-task/books">
                            <button onClick={e => handleClick(e)}>Sign-In</button>
                        </Link>
                    </fieldset>
                </form>
            </main>
        );
    }
}

export default Signin;