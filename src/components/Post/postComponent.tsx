import React, { useEffect, useState } from 'react'
import instance from '../api/axios.instance';

const PostComponent: React.FC = () => {
    const [posts, setPosts] = useState<any>();

    useEffect(() => {
        const posts = instance.get('post/find/all?page=1');

        setPosts(posts);
    }, [])

    return (
        <div className="post">
            {posts}
        </div>
    )
}

export default PostComponent;