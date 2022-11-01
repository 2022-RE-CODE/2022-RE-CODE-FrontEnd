import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import instance from '../api/axios.instance';
import '../../styles/postinfo.css';
import FobbidenErrorComponent from '../auth/fobbidenErrorComponent';
import { CategoryType } from './postType';

type PostInfoComponentProps = {
    isAuthenticated: boolean | null;
    postInfo: {
        postId: number,
        title: string,
        content: string,
        view: number,
        likes: number,
        createMinutesAgo: string,
        categories: CategoryType[],
        // TODO :: USER TYPE 따로 파일 뺴기 
        user: {
            userId: number,
            nickname: string,
            role: string,
            roles: string,
            position: string,
            gitLink: string,
            blogLink: string,
            img: string
        },
        // TODO :: COMMENTS TYPE 따로 파일 빼기
        comments: string[]
    } | undefined
};

const PostInfoComponent: React.FC<PostInfoComponentProps> = ({
    isAuthenticated,
    postInfo
}) => {

    return (
        <div className="post-info">
            {isAuthenticated ?
                <div className="post-info--view">
                    <div className="post-info--title">
                        {postInfo?.title}
                    </div>
                    <div className='post--info--category-container'>
                        {postInfo?.categories.map((category: CategoryType) => {
                            return (
                                <div className='post--category'>
                                    {category.name}
                                </div>
                            )
                        })}
                    </div>
                    <div className="post--info-img">
                        <img src={postInfo?.user.img} alt={postInfo?.user.nickname}></img>
                    </div>
                    <div className="post--info-nickname">
                        {postInfo?.user.nickname}
                    </div>
                    <div className="post--info-view">
                        {postInfo?.view}
                    </div>
                    <div className="post--info-likes">
                        {postInfo?.likes}
                    </div>
                    <div className="post--info-careateMinutesAgo">
                        {/* TODO :: 120분 이하만 렌더링 */}
                        {postInfo?.createMinutesAgo}
                    </div>
                    <div>
                        {postInfo?.content}
                    </div>
                    <div className='post--info--comment-container'>
                        {postInfo?.comments.map((comment: string) => {
                            return (
                                <div className='post--comment'>
                                    {comment}
                                </div>
                            )
                        })}
                    </div>

                </div>
                : <FobbidenErrorComponent />
            }
        </div>
    )
}

export default PostInfoComponent;