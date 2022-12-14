import React from 'react'
import { useState } from 'react';
import '../../styles/auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { instance } from '../api/axios.instance';
import instanceWithHeader from '../api/axiosWithHeader.instance';
import qs from 'qs';
import { toast, ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


type EnumPositionType = {
    [key: string]: string
    FRONT: string
    BACK: string
}

const EnumPosition: EnumPositionType = {
    FRONT: "프론트엔드",
    BACK: "백엔드"
}

const AuthComponent: React.FC = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [verificationCode, setVerificationCode] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [checkPassword, setCheckPassword] = useState<string>("");
    const [position, setPosition] = useState<string>("FRONT");

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const codeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setVerificationCode(e.target.value);
    }

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const checkPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCheckPassword(e.target.value);
    };

    const nicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setNickname(e.target.value);
    }

    const positionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setPosition(e.target.value);
    }

    const getVerificationCode = () => {

        instanceWithHeader.post("email/join", qs.stringify({
            email: email
        }))
        .then((response) => {
            if (response.status === 200) {
                toast("이메일 전송이 완료되었습니다.");
            }
        });
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = JSON.stringify({
            email: email,
            nickname: nickname,
            password: password,
            checkPassword: checkPassword,
            checkEmailCode: verificationCode,
            position: position
        });

        instance.post("user", payload)
            .then(response => {
                if (response.status === 200) {
                    navigate("/login");
                }
                else {
                    toast.error(response.data);
                }
            })
    };

    return (
        <div className="auth">
            <div className="auth--form-container">
                <Link to="/" className="Header--home-btn">
                    <img className="Header--logo-img" src={'logo-recode.png'} alt='logo-recode'/>
                </Link>
                <div className="login--title1">자신의 능력으로</div>
                <div className="login--title2">추가 수익을 만들어보세요!</div>

                <form className="auth--form" onSubmit={submitHandler}>
                    <div className="auth--email-container">
                        <input type="email" value={email} onChange={emailHandler} placeholder="이메일"></input>
                        <button className="auth--form--emailBtn" type="button" onClick={getVerificationCode}>인증메일 발송</button>
                    </div>
                    <input value={verificationCode} onChange={codeHandler} placeholder="이메일 인증코드" required></input>
                    <input value={nickname} onChange={nicknameHandler} placeholder="닉네임" required></input>
                    <input type="password" value={password} onChange={passwordHandler} placeholder="비밀번호" required></input>
                    <input type="password" value={checkPassword} onChange={checkPasswordHandler} placeholder="비밀번호 확인" required></input>
                    <select className="auth--form-position" value={position} onChange={positionHandler} required>
                        {Object.keys(EnumPosition).map((key: string) => (
                            <option key={key} value={key}>
                                {EnumPosition[key]}
                            </option>
                        ))}
                    </select>
                    <button className="auth--form--submitBtn" type="submit">회원가입하기</button>
                </form>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={true}
                transition={Slide}
                limit={1}
            />
        </div>
    )
}

export default AuthComponent;