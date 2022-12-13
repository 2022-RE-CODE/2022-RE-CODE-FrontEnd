import React, { useEffect, useState } from 'react'
import instance from '../api/axios.instance';
import '../../styles/post.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import instanceWithToken from '../api/axiosWithToken.instance';
import { useSelector } from 'react-redux';
import { CategoryType, PostType } from './postType';
import { RootState } from '../../redux';

const PostComponent: React.FC = () => {
    const [posts, setPosts] = useState<React.ReactNode>();
    const [searchParams, ] = useSearchParams();
    const navigate = useNavigate();
    const userId = useSelector((state: RootState) => state.userReducer.user?.userId);

    const toPostUploadPage = () => {
        navigate('/post/upload');
    }

    useEffect(() => { 
        const getPosts = async () => {
            try {
                const page = searchParams.get('page');
                const title = searchParams.get('title');
                let response;
                if (title === null) {
                    response = await instance.get(`post/find/all?page=${page ?? 0}`);
                } else {
                    response = await instance.get(`post/find/title?title=${title}`);
                }
                const postList = response.data.data.map((post: PostType) => {
                    
                    const deletePost = async (postId: number) => {
                        await instanceWithToken.delete(`/post/delete/${postId}`);
                        window.location.reload();
                    }

                    return (
                        <>
                            <div 
                                className="post-card"
                                key={post.postId}>
                                <div className="post--img-line">
                                    <div 
                                        className="card--img"
                                        onClick={() => { navigate(`/post/${post.postId}`) }}>
                                        <img src='/post-background.png' alt="logo"></img>
                                        <div className="card--img--title">{post.title}</div>
                                    </div>
                                    <div className='post--category-container'>
                                        {post.categories.map((category: CategoryType) => {
                                            return (
                                                <div className='post--category'>
                                                    {category.name}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div 
                                        className="post--title" 
                                        onClick={() => { navigate(`/post/${post.postId}`) }}>
                                        {post.title}
                                    </div>
                                    <div className="post--info">
                                        <div className="post--info--view">
                                            <span>조회수 {post.view}</span>
                                        </div>
                                        <div className="post--info--dot">
                                            <span>•</span>
                                        </div>
                                        <div className='post--info--like'>
                                            <span>추천 {post.likes}</span>
                                        </div>
                                    </div>
                                    { post.user.userId === userId ? 
                                    <div className='post--info-btn-wrapper'>
                                        <div 
                                            className="post--info--modify" 
                                            onClick={() => navigate(`/post/modify/${post.postId}`)}>수정</div>
                                        <div 
                                            className="post--info--delete" 
                                            onClick={() => deletePost(post.postId)}>삭제</div>
                                    </div>
                                    : null }
                                    </div>
                                <hr />
                                {/* TODO :: Position에 기반한 게시글 나누기 */}
                                {/* {post.user.position} */}
                            </div>
                        </>
                    )
                })
                setPosts(postList);
            } catch (err) {
                // TODO :: 예외 처리
            }
        }
        getPosts();
    }, [searchParams, userId, navigate]);

    return (
        <div className="post">
            <div className="post-card--container">
                {posts}
            </div>
            <div className="post-pagenation">
                {/* TODO :: PAGENATION */}
                <div></div>
            </div>
            <div className="post-upload-btn" onClick={toPostUploadPage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
                </svg>
            </div>

        </div>
    )
}

export default PostComponent;