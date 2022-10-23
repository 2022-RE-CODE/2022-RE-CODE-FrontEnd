import React, { useEffect, useState } from 'react'
import instance from '../api/axios.instance';
import '../../styles/post.css';
import { BiLike, BiTimeFive, BiImageAlt } from "react-icons/bi";
import { MdOutlineVisibility } from "react-icons/md";
import { CategoryType, PostType } from './postType';
import { useNavigate } from 'react-router-dom';

const PostComponent: React.FC = () => {
    const [posts, setPosts] = useState<React.ReactNode>();
    const navigate = useNavigate();

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        try {
            const response = await instance.get('post/find/all?page=0');
            const postList = response.data.data.map((post: PostType) => {
                return (
                    <div onClick={() => { navigate(`/post/${post.postId}`) }}
                        className="post-card"
                        key={post.postId}>
                        <div className="post--title">{post.title}</div>
                        <div className="post--user">
                            <div className="user-img">
                                {post.user?.img ?
                                    <img src={post.user.img}></img>
                                    : <BiImageAlt />
                                }
                            </div>
                            <div className="post--nickname">{post.user.nickname}</div>
                        </div>
                        <div className="post--info">
                            <div className="post--info--view">
                                <MdOutlineVisibility />
                                {post.view}
                            </div>
                            <div className="post--info--likes">
                                <BiLike />
                                {post.likes}
                            </div>
                            <div className="post--info--time">
                                <BiTimeFive />
                                {post.createMinutesAgo}
                            </div>
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
                        {/* TODO :: Position에 기반한 게시글 나누기 */}
                        {/* {post.user.position} */}
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
        </div>
    )
}

export default PostComponent;