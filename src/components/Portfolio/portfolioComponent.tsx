import React from 'react'
import { BiImageAlt } from 'react-icons/bi';
import { NavLink, useParams } from 'react-router-dom';
import '../../styles/portfolio.css';
import CommentComponent from '../Post/commentComponent';

const PortfolioComponent: React.FC = () => {

    const { portfolioId } = useParams();

    return (
        <div className="portfolio">
            <div className="portfolios">
                <div className="portfolios--header">
                    <div className="portfolios--title">
                        포트폴리오 보기
                    </div>
                </div>
                <div className="portfolios-all">
                    <NavLink to={`/portfolio/my`} className="portfolio--portfolio-item">내 포트폴리오</NavLink>
                    <NavLink to={`/portfolio/${"2"}`} className="portfolio--portfolio-item">1번 포트폴리오</NavLink>
                    <NavLink to={`/portfolio/${"3"}`} className="portfolio--portfolio-item">2번 포트폴리오</NavLink>
                    <NavLink to={`/portfolio/${"4"}`} className="portfolio--portfolio-item">3번 포트폴리오</NavLink>
                </div>
            </div>
            <div className="portfolio--content">
                <div className="portfolio--content--header">
                    <div className="portfolio--content--header--title">
                        김영민 님의 포트폴리오
                    </div>
                    <div className="portfolio--content--header--time">
                        3분 전 업데이트
                    </div>
                </div>
                <div className="portfolio--content--my">
                    <a className="portfolio--content-item" href="https://devlog.kro.kr" target="_black">
                        <div className="portfolio--content--my--link">개인 블로그</div>
                        <div className="portfolio--content--my--ref">devlog.kro.kr🔗</div>
                    </a>
                    <a className="portfolio--content-item" href="https://github.com/min050410" target="_black">
                        <div className="portfolio--content--my--link">깃허브</div>
                        <div className="portfolio--content--my--ref">github.com/min050410🔗</div>
                    </a>
                </div>
                <div className="portfolio--content--input-wrapper">
                    <input
                        className="portfolio--content--input"
                        placeholder="포트폴리오 이름" />
                    <input
                        className="portfolio--content--input"
                        placeholder="포트폴리오 링크" />
                    <button className="portfolio--content--input-submit-btn">
                        추가하기
                    </button>
                </div>
                <CommentComponent
                    comments={[{
                        commentId: 1,
                        userId: 1,
                        comment: "margin이 좀 많네요 ㅋㅋ",
                        nickname: "영민"
                    },
                    {
                        commentId: 1,
                        userId: 1,
                        comment: "좀 병쉰같네요",
                        nickname: "영민"
                    },
                    {
                        commentId: 1,
                        userId: 1,
                        comment: "혹시? 배포는 하셨나요? 접속이 안되는데요?",
                        nickname: "영민"
                    },
                    {
                        commentId: 1,
                        userId: 1,
                        comment: "나보다못했노",
                        nickname: "영민"
                    }]}
                />
            </div>
        </div>
    )
}
export default PortfolioComponent; 