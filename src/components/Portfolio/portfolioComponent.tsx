import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import '../../styles/portfolio.css';
import instanceWithToken from '../api/axiosWithToken.instance';
import CommentComponent from '../Post/commentComponent';
import { UserType } from '../Post/postType';

type PortfolioType = {
    userId: number,
    nickname: string,
    role: string,
    roles: string,
    // todo :: position enum
    position: string,
    gitLink: string,
    blogLink: string,
    img: string,
    links: LinksType[]
}

type LinksType = {
    links: {
        linkId: number,
        userId: number,
        title: string,
        url: string
    }
}

type LinkType = {
    linkId: number,
    title: string,
    url: string,
    user: {
        userId: number,
        nickname: string,
        role: string,
        roles: string,
        // todo :: position enum
        position: string,
        gitLink: string,
        blogLink: string,
        img: string
    },
    updatedAt: string
};

const PortfolioComponent: React.FC = () => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [modifyTitle, setModifyTitle] = useState("");
    const [modifyUrl, setModifyUrl] = useState("");
    const [modifyItem, setModifyItem] = useState(0);
    
    const { portfolioId } = useParams();

    useEffect(() => {
        getPortfolios();
    }, [])

    useEffect(() => {
        getLinks();
        getUserInfo();
    }, [portfolioId])

    const [portfolios, setPortfolios] = useState<PortfolioType[]>();
    const getPortfolios = async () => {
        try {
            const response = await instanceWithToken.get(`/link`);
            setPortfolios(response.data);
        } catch (err) {
            // TODO :: 예외 처리
        }
    }

    const [links, setLinks] = useState<LinkType[]>();
    const getLinks = async () => {
        try {
            const response = await instanceWithToken.get(`/link/${portfolioId}`);
            setLinks(response.data);
        } catch (err) {
            // TODO :: 예외 처리
        }
    }

    const [user, setUser] = useState<UserType>();
    const getUserInfo = async () => {
        if (portfolioId === "my") return;
        try {
            const response = await instanceWithToken.get(`/user/${portfolioId}`);
            setUser(response.data);
        } catch (err) {
            // TODO :: 예외 처리
        }
    }

    const UploadPortfolio = async () => {
        const payload = JSON.stringify({
            title: title,
            url: url
        });
        await instanceWithToken.post('/link', payload);
        window.location.reload();
    }

    const ModifyPortfolio = async (linkId: number) => {
        const payload = JSON.stringify({
            title: modifyTitle,
            url: modifyUrl
        });
        await instanceWithToken.put(`/link/${linkId}`, payload);
        window.location.reload();
    }

    const deleteLink = async (linkId: number) => {
        await instanceWithToken.delete(`/link/${linkId}`);
        window.location.reload();
    }

    const onClickModifyBtn = (linkId: number, title: string, url: string) => {
        setModifyItem(prev => {
            return prev === linkId ? 0 : linkId
        });
        setModifyTitle(title)
        setModifyUrl(url);
    }

    const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const linkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUrl(e.target.value);
    }

    const modifyTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setModifyTitle(e.target.value);
    };

    const modifyUrlHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setModifyUrl(e.target.value);
    }

    const DateFormat = (date: string) => {
        return date.slice(0, 10) + " " + date.slice(11, 19);
    }

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
                    {portfolios?.map((portfolio) => {
                        return (
                            <NavLink
                                to={`/portfolio/${portfolio.userId}`}
                                className="portfolio--portfolio-item">
                                {portfolio.nickname} 포트폴리오
                            </NavLink>
                        )
                    })}
                </div>
            </div>
            <div className="portfolio--content">
                <div className="portfolio--content--header">
                    <div className="portfolio--content--header--title">
                        {portfolioId === 'my' ?
                            <>내 </> :
                            <>{user?.nickname}님의 </>
                        }
                        포트폴리오
                    </div>
                    <div className="portfolio--content--header--time">
                        {links ? links.length > 0 && DateFormat(links[links.length - 1].updatedAt) : null}
                        {links ?
                            links.length > 0 ?
                                <> 추가</> :
                                <>업데이트 기록 없음</>
                            : null
                        }
                    </div>
                </div>
                <div className="portfolio--content--my">
                    {
                        links?.map((link) => {
                            return (
                                <div className="portfolio--content-item-wrapper">
                                    <a className="portfolio--content-item" href={link.url} target="_black">
                                        <div className="portfolio--content--my--link">{link.title}</div>
                                        <div className="portfolio--content--my--ref">{link.url}🔗</div>
                                    </a>
                                    {portfolioId === "my" &&
                                        <div className="portfolio--content--my--btn-wrapper">
                                            <div
                                                className="portfolio--content--my--modify"
                                                onClick={() => onClickModifyBtn(link.linkId, link.title, link.url)}>수정하기</div>
                                            <div
                                                className="portfolio--content--my--delete"
                                                onClick={() => deleteLink(link.linkId)}>삭제하기</div>
                                        </div>
                                    }
                                    {(portfolioId === "my" && modifyItem === link.linkId) &&
                                        <div className="portfolio--content--my--modify-wrapper">
                                            <input
                                                className="portfolio--content--input"
                                                placeholder="포트폴리오 이름"
                                                onChange={modifyTitleHandler}
                                                value={modifyTitle} />
                                            <input
                                                className="portfolio--content--input"
                                                placeholder="포트폴리오 링크 (https 헤더 포함)"
                                                onChange={modifyUrlHandler}
                                                value={modifyUrl} />
                                            <button
                                                className="portfolio--content--input-submit-btn"
                                                onClick={() => ModifyPortfolio(link.linkId)}>
                                                수정하기
                                            </button>
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                {portfolioId === "my" && <div className="portfolio--content--input-wrapper">
                    <input
                        className="portfolio--content--input"
                        placeholder="포트폴리오 이름"
                        onChange={titleHandler}
                        value={title} />
                    <input
                        className="portfolio--content--input"
                        placeholder="포트폴리오 링크 (https 헤더 포함)"
                        onChange={linkHandler}
                        value={url} />
                    <button
                        className="portfolio--content--input-submit-btn"
                        onClick={UploadPortfolio}>
                        추가하기
                    </button>
                </div>}
            </div>
        </div>
    )
}
export default PortfolioComponent; 