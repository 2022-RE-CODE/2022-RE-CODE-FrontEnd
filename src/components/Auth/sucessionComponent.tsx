import React from 'react'
import '../../styles/login.css';
import 'react-toastify/dist/ReactToastify.css';

export type SecesstionComponentProps = {
    token: string | null
}

const SecessionComponent: React.FC<SecesstionComponentProps> = ({
    token,
}: SecesstionComponentProps) => {

    // const submitHandler = (e: any) => {
        // e.preventDefault();
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
    // };

    return (
        <div className="secession">

        </div>
    );
}
export default SecessionComponent;