import React, { useEffect, useState, useMemo } from 'react'
import instance from '../api/axios.instance';
import '../../styles/post.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import instanceWithToken from '../api/axiosWithToken.instance';
import { useSelector} from 'react-redux';
import { CategoryType, PostType } from './postType';
import { RootState } from '../../redux';

const PostComponent: React.FC = () => {
    const [posts, setPosts] = useState<React.ReactNode>();
    const [searchParams, ] = useSearchParams();
    const navigate = useNavigate();
    const userId = useSelector((state: RootState) => state.userReducer.user?.userId);
    const PostBackgroundEl = useMemo(() => {
        return <img src='/post-background.png' alt="logo"></img>
    }, [])

    const toPostUploadPage = () => {
        navigate('/post/upload');
    }

    useEffect(() => { 
        const getPosts = async () => {
            try {
                const page = searchParams.get('page');
                const title = searchParams.get('title');
                const category = searchParams.get('category');
                const resizeTitle = (title: string, len: number) => {
                    if (title.length < len) return title;
                    else return title.slice(0,len) + '...';
                }
                let response;
                if (title !== null) {
                    response = await instance.get(`post/find/title?title=${title}`);
                } 
                else if (category !== null) {
                    response = {
                        data: await instance.get(`/category?categoryName=${category}`)
                    }
                }
                else {
                    response = await instance.get(`post/find/all?page=${page ?? 0}`);
                } 
                const postList = response.data.data.reverse().map((post: PostType) => {
                    
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
                                        { PostBackgroundEl }
                                        <div className="card--img--title">{resizeTitle(post.title, 10)}</div>
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
                                        {resizeTitle(post.title, 30)}
                                    </div>
                                    { post.user.userId === userId ? 
                                    <div className='post--info-btn-wrapper'>
                                        <div 
                                            className="post--info--modify" 
                                            onClick={() => navigate(`/post/modify/${post.postId}`)}>??????</div>
                                        <div 
                                            className="post--info--delete" 
                                            onClick={() => deletePost(post.postId)}>??????</div>
                                    </div>
                                    : null }
                                    </div>
                                <hr />
                            </div>
                        </>
                    )
                })
                setPosts(postList);
            } catch (err) {
                // TODO :: ?????? ??????
            }
        }
        getPosts();
    }, [searchParams, userId, navigate, PostBackgroundEl]);

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