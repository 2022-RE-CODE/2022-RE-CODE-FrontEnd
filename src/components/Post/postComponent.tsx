import React, { useEffect, useState } from 'react'
import instance from '../api/axios.instance';

const PostComponent: React.FC = () => {
    const [posts, setPosts] = useState<any>();

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        try {
            const response = await instance.get('post/find/all?page=0');
            console.log(response.data.count);
            console.log(response.data.data);
            const postList = response.data.data.map((post: any) => {
                return (
                    <div>
                        {post.postId}
                        {post.title}
                        {post.content}
                        {post.view}
                        {post.likes}
                        {post.createMinutesAgo}
                        {post.categories.map((categori: any) => {
                            return(
                                <div>
                                    {categori.name}
                                </div>
                            )
                        })}
                        {post.user.userId}
                        {post.user.nickname}
                        {post.user.role}
                        {post.user.roles}
                        {post.user.position}
                        {post.user.gitLink}
                        {post.user.blogLink}
                        {post.user.img}
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
            {posts}
        </div>
    )
}

export default PostComponent;