import React from 'react'
import '../../styles/footer.css';
import { useNavigate } from 'react-router-dom';
import { BSSM_WEB_URL, GITHUB_URL } from '../../constants/constants';

const FooterComponent: React.FC = () => {

    return (
        <div className="Footer">
                <div className="footer--nav-container">
                    <div className="footer--nav">
                        <a className="footer--nav--github" rel="noreferrer" href={GITHUB_URL} target="_blank">깃허브</a>
                        <div className="footer--divider"></div>
                        <a className="footer--nav--bssm" rel="noreferrer" href={BSSM_WEB_URL} target="_blank">부산소프트웨어 마이스터고</a>
                    </div>
                </div> 
                <div className="footer--info-container">
                    <div className="footer--info">
                        <div className="footer--info-title">RE:CODE</div>
                        <div className="footer--info--maker">프론트: 김영민, 백엔드: 최원용, 김영민</div>
                        <div className="footer--info-email">min050410@gmail.com</div>
                        <div className="footer--info-copyright">Copyright 2022. min050410, nyoung. All rights reserved.</div>
                    </div>
                </div>
        </div>
    )
}

export default FooterComponent;