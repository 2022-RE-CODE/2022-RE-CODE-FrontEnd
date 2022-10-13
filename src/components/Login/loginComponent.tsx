import React from 'react'
import { useState } from 'react';
import '../../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { instance } from '../api/axios.instance';
import { toast, ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export type LoginComponentProps = {
    onLogin: (token: string) => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({
    onLogin,
}: LoginComponentProps) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (e: any) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const passwordHandler = (e: any) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const submitHandler = (e: any) => {
        e.preventDefault();
        instance.post("auth/login", JSON.stringify({
            email: email,
            password: password
        }))
        .then(response => {
            if (response.status === 200) {
                // TODO :: Navigate 후에도 알림 뜨도록 수정
                toast("로그인이 완료되었습니다.");
                onLogin(response.data.accessToken.value);
                // navigate("/");
            }
            else {
                toast(response.data);
            }
        });
    };

    return (
        <div className="login">
            <div className="login--form-container">
                <Link to="/" className="Header--home-btn">
                    <img className="Header--logo-img" src={'logo-recode.png'} />
                </Link>
                <div className="login--title1">자신의 능력으로</div>
                <div className="login--title2">추가 수익을 만들어보세요!</div>
                <form className="login--form" onSubmit={submitHandler}>
                    <label className="login--form--label"></label>
                    <input type="email" value={email} onChange={emailHandler} placeholder="이메일"></input>
                    <input type="password" value={password} onChange={passwordHandler} placeholder="비밀번호"></input>
                    <div className="login--form--btnContainer">
                        <button className="login--form--submitBtn" type="submit">로그인</button>
                        <Link to="/auth"><button className="login--form--authBtn">회원가입</button></Link>
                    </div>
                </form>
            </div>
            <ToastContainer 
                position="bottom-center" 
                autoClose={2000} 
                hideProgressBar={true} 
                newestOnTop={true} 
                transition={Slide}
            />
        </div>
    );
}
export default LoginComponent;