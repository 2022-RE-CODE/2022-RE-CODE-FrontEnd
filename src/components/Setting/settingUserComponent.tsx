import React from 'react'
import { useState } from 'react';
import '../../styles/auth.css';
import { toast, ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import instanceWithToken from '../api/axiosWithToken.instance';

type EnumPositionType = {
    [key: string]: string
    FRONT: string
    BACK: string
}

const EnumPosition: EnumPositionType = {
    FRONT: "프론트엔드",
    BACK: "백엔드"
}

const SettingUserComponent: React.FC = () => {

    const [nickname, setNickname] = useState<string>("");
    const [gitLink, setGitLink] = useState<string>("");
    const [blogLink, setBlogLink] = useState<string>("");
    const [position, setPosition] = useState<string>("FRONT");

    const gitLinkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setGitLink(e.target.value);
    };

    const blogLinkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setBlogLink(e.target.value);
    }

    const nicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setNickname(e.target.value);
    }

    const positionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setPosition(e.target.value);
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = JSON.stringify({
            nickname: nickname,
            gitLink: gitLink,
            blogLink: blogLink,
            position: position
        });

        await instanceWithToken.put('user/update', payload)
            .then(response => {
                if (response.status === 200) {
                    toast("유저 정보 수정이 완료되었습니다.");
                }
            })
    };

    return (
        <div className="auth">
            <div className="auth--form-container">
                <div className="login--title2">유저 정보 수정</div>
                <form className="auth--form" onSubmit={submitHandler}>
                    <input value={nickname} onChange={nicknameHandler} placeholder="닉네임"></input>
                    <input value={gitLink} onChange={gitLinkHandler} placeholder="깃허브 링크"></input>
                    <input value={blogLink} onChange={blogLinkHandler} placeholder="블로그 링크"></input>
                    <select className="auth--form-position" value={position} onChange={positionHandler}>
                        {Object.keys(EnumPosition).map((key: string) => (
                            <option key={key} value={key}>
                                {EnumPosition[key]}
                            </option>
                        ))}
                    </select>
                    <button className="auth--form--submitBtn" type="submit">정보 수정하기</button>
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

export default SettingUserComponent;