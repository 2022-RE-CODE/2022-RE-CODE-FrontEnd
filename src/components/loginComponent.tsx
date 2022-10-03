import React from 'react'
import { useState } from 'react';
import '../styles/login.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginComponent: React.FC = () => {

    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");

    const emailHandler = (e: any) => {
        e.preventDefault();
        SetEmail(e.target.value);
    };

    const passwordHandler = (e: any) => {
        e.preventDefault();
        SetPassword(e.target.value);
    };

    const submitHandler = (e: any) => {
        e.preventDefault();
        // state에 저장한 값을 가져옵니다.
        console.log(Email);
        console.log(Password);

        let body = {
            email: Email,
            password: Password,
        };

        // axios
        //     .post("http://localhost:5000/api/users/login", body)
        //     .then((res: any) => console.log(res));
    };

    return (
        <div className="login">
            <div className="login--form-container">
                <form className="login--form" onSubmit={submitHandler}>
                    <label>Email</label>
                    <input type="email" value={Email} onChange={emailHandler}></input>
                    <label>Password</label>
                    <input
                        type="password"
                        value={Password}
                        onChange={passwordHandler}
                    ></input>
                    <button type="submit">로그인</button>
                    <button><Link to="auth">회원가입</Link></button>
                </form>
            </div>
        </div>
    )
}
export default LoginComponent;