import React from 'react'
import '../../styles/login.css';
import 'react-toastify/dist/ReactToastify.css';

export type SecesstionComponentProps = {
    token: string | null
}

const SecessionComponent: React.FC<SecesstionComponentProps> = ({
    token,
}: SecesstionComponentProps) => {
    return (
        <div className="secession">

        </div>
    );
}
export default SecessionComponent;