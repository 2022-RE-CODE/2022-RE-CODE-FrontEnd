import React, { useEffect, useState } from 'react'
import instance from '../api/axios.instance';
import '../../styles/post.css';
import { VscTriangleUp } from "react-icons/vsc";
import { MdOutlineVisibility } from "react-icons/md";
import { CategoryType, PostType } from './postType';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PostComponent: React.FC = () => {
    const [posts, setPosts] = useState<React.ReactNode>();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        try {
            const page = searchParams.get('page'); 
            const response = await instance.get(`post/find/all?page=${page ?? 0}`);
            const postList = response.data.data.map((post: PostType) => {
                return (
                    <div onClick={() => { navigate(`/post/${post.postId}`) }}
                        className="post-card"
                        key={post.postId}>
                        <div className="post--img-line"> 
                            <div className="post--img">
                                <div className="post--img-title">{post.title}</div>
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
                            <div className="post--title">{post.title}</div>
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
                        </div>
                        {/* TODO :: Position에 기반한 게시글 나누기 */}
                        {/* {post.user.position} */}
                        <hr/>
                    </div>
                )
            })
            setPosts(postList);
        } catch (err) {
            // TODO :: 예외 처리
        }
    }

    return (
        <div className="post">
            <div className="post-card--container">
                {posts}
            </div>
            <div className="post-pagenation">
                {/* TODO :: PAGENATION */}
                <div></div>
            </div>
        </div>
    )
}

export default PostComponent;