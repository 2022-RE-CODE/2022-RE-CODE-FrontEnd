import React, { useEffect } from 'react'
import { useState } from 'react';
import '../styles/login.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthComponent: React.FC = () => {

    useEffect(() => {
        axios.post('')
    }, [])

    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Nickname, SetNickname] = useState(""); 

    const emailHandler = (e: any) => {
        e.preventDefault();
        SetEmail(e.target.value);
    };

    const passwordHandler = (e: any) => {
        e.preventDefault();
        SetPassword(e.target.value);
    };

    const nicknameHandler = (e: any) => {
        e.preventDefault();
        SetNickname(e.target.value);
    }

    const submitHandler = (e: any) => {
        e.preventDefault();

        let body = {
            email: Email,
            password: Password,
        };

        // axios
        //     .post("http://localhost:5000/api/users/login", body)
        //     .then((res: any) => console.log(res));
    };

    return (
        <div className="auth">
            <div className="auth--form-container">
                <form className="auth--form" onSubmit={submitHandler}>
                    <label>Email</label>
                    <input type="email" value={Email} onChange={emailHandler}></input>
                    <label>Nickname</label>
                    <input type="nickname" value={Nickname} onChange={nicknameHandler}></input>
                    <label>Password</label>
                    <input
                        type="password"
                        value={Password}
                        onChange={passwordHandler}
                    ></input>
                    <label>CheckPassword</label>
                    
                    <button type="submit">회원가입하기</button>
                    <button><Link to="auth">돌아가기</Link></button>
                </form>
            </div>
        </div>
    )
}
export default AuthComponent;