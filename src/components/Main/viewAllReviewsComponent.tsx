import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/allreviews.css';
import instance from '../api/axios.instance';
import { CategoryType, PostType } from '../Post/postType'

const ViewAllReviewsComponent: React.FC = (props) => {

    const [posts, setPosts] = useState<React.ReactNode>();
    const navigate = useNavigate();
    const PostBackgroundEl = useMemo(() => {
        return <img src='/post-background.png' alt="logo"></img>
    }, [])
    const resizeTitle = (title: string, len: number) => {
        if (title.length < len) return title;
        else return title.slice(0, len) + '...';
    }

    useEffect(() => {
        const getPosts = async () => {
            const response = await instance.get(`post/find/all`);
            const CardEl = response.data.data.slice(0, 4).map((post: PostType) => {
                return (
                    <div className="card" onClick={() => { navigate(`/post/${post.postId}`) }} key={post.postId}>
                        <div className="card--img">
                            {PostBackgroundEl}
                            <div className="card--img--title">{resizeTitle(post.title, 10)}</div>
                        </div>
                        <div className="card--title">{resizeTitle(post.title, 30)}</div>
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
                        <div className="card--tags">
                            {post.categories.map((category: CategoryType) => {
                                return (
                                    <div className='card--tag1'>
                                        {category.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>)
            })
            setPosts(CardEl);
        }
        getPosts();
    }, [navigate, PostBackgroundEl]);

    return (
        <div className="view-all-review">
            <div className="view-all-review--container">
                <div className="view-all-review--title">모든 리뷰 요청</div>
                <div className="card-container">
                    {posts}
                </div>
            </div>
        </div>
    )
}
export default ViewAllReviewsComponent;