import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/allreviews.css';
import instance from '../api/axios.instance';
import { CategoryType, PostType } from '../Post/postType'

const ViewAllReviewsComponent: React.FC = (props) => {

    const [posts, setPosts] = useState<React.ReactNode>();

    useEffect(() => {
        getPosts();
    }, [])

    const navigate = useNavigate();

    const getPosts = async () => {
        const response = await instance.get(`post/find/all?page=$0`);
        const CardEl = response.data.data.slice(0, 4).map((post: PostType) => {
            return (
                <div className="card" onClick={() => {navigate(`/post/${post.postId}`)}} key={post.postId}>
                <div className="card--img">
                    <img src='/post-background.png' alt="logo"></img>
                    <div className="card--img--title">{post.title}</div>
                </div>
                <div className="card--title">{post.title}</div>
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