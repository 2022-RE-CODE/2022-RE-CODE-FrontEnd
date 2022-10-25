import React from 'react'
import { useState } from 'react';
import '../../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export type SecesstionComponentProps = {
    token: string | null
}

const SecesstionComponent: React.FC<SecesstionComponentProps> = ({
    token,
}: SecesstionComponentProps) => {
    const navigate = useNavigate();


    const submitHandler = (e: any) => {
        e.preventDefault();
        // instance.post("auth/login", JSON.stringify({
        //     email: email,
        //     password: password
        // }))
        // .then(response => {
        //     if (response.status === 200) {
        //         // TODO :: Navigate 후에도 알림 뜨도록 수정
        //         toast("로그인이 완료되었습니다.");
        //         onLogin(response.data.accessToken.value);
        //         // navigate("/");
        //     }
        //     else {
        //         toast(response.data);
        //     }
        // });
    };

    return (
        <div className="secesstion">

        </div>
    );
}
export default SecesstionComponent;