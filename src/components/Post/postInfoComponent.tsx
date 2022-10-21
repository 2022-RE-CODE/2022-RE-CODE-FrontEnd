import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

type PostInfoComponentProps = {
    isAuthenticated: boolean | null;
}

const PostInfoComponent: React.FC<PostInfoComponentProps> = ({
    isAuthenticated
}) => {

    const params = useParams();
    const navigate = useNavigate();

    return (
        <div className="post-info">
            
        </div>
    )
}

export default PostInfoComponent;