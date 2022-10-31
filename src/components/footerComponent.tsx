import React from 'react'
import '../styles/header.css';
import { useNavigate } from 'react-router-dom';

const FooterComponent: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="Footer">
            <div className="footer--nav">
                <div className="footer--nav--github">깃허브</div>
                <div className="footer--nav--bssm">부산소마고</div>
            </div> 
            <div className="footer--info">
                <div className="footer--info-title">RE:CODE</div>
                <div className="footer--info--maker">프론트: 김영민, 백엔드: 최원용, 김영민</div>
                <div className="footer--info-email">min050410@gmail.com</div>
                <div className="footer--info-copyright">Copyright 2022. min050410, nyoung. All rights reserved.</div>
            </div>
        </div>
    )
}

export default FooterComponent;