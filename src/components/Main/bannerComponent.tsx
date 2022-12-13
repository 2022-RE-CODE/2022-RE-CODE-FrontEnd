import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/banner.css';

const BannerComponent: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="banner">
            <div className="banner--container">
                <div className="banner--container-firstline">
                     RE: CODE
                </div>
                <div className="banner--container-secondline">
                    LEVEL UP YOUR CODES
                </div>
                <button className="btn-start-now" onClick={()=>navigate('/login')}>지금 시작하기</button>
            </div>
            <div className="polygon-1"></div>
            <div className="polygon-2"></div> 
            <div className="polygon-3"></div>
            <div className="polygon-4"></div>
        </div>
    )
}
export default BannerComponent;