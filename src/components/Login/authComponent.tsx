import React from 'react'
import { useState } from 'react';
import '../../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { instance } from '../api/axios.instance';
import { instanceWithHeader } from '../api/axiosWithHeader.instance';
import qs from 'qs';

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
                // 코드 발송 완료 ~에서 확인해주세요
                console.log(response);
            });
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(position);

        const payload = JSON.stringify({
            email: email,
            nickname: nickname,
            password: password,
            checkPassword: checkPassword,
            checkEmailCode: verificationCode,
            position: position
        });

        instance.post("user", payload)
            .then((response) => {
                console.log(response);
            });

        // 로그인 페이지로 이동
        // Todo:: 예외 처리
        // Todo:: Code 200 일 때만 Navigate
        navigate("/login");
    };

    return (
        <div className="auth">
            <div className="auth--form-container">
                <Link to="/" className="Header--home-btn">
                    <img className="Header--logo-img" src={'logo-recode.png'} />
                </Link>
                <form className="auth--form" onSubmit={submitHandler}>
                    <input type="email" value={email} onChange={emailHandler} placeholder="이메일"></input>
                    <button type="button" onClick={getVerificationCode}>인증메일 발송</button>
                    <input value={verificationCode} onChange={codeHandler} placeholder="이메일 인증코드"></input>
                    <input value={nickname} onChange={nicknameHandler} placeholder="닉네임"></input>
                    <input type="password" value={password} onChange={passwordHandler} placeholder="비밀번호"></input>
                    <input type="password" value={checkPassword} onChange={checkPasswordHandler} placeholder="비밀번호 확인"></input>
                    <select value={position} onChange={positionHandler}>
                        {Object.keys(EnumPosition).map((key: string) => (
                            <option key={key} value={key}>
                                {EnumPosition[key]}
                            </option>
                        ))}
                    </select>
                    <button type="submit">회원가입하기</button>
                    <button><Link to="/login">돌아가기</Link></button>
                </form>
            </div>
        </div>
    )
}

export default AuthComponent;