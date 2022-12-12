import React from 'react'
import { UserType } from '../../redux/user/reducer/user.reducerType';
import '../../styles/comment.css';
import { CategoryType, CommentType } from './postType';

type CommentComponentType = {
    postInfo: {
        postId: number,
        title: string,
        content: string,
        view: number,
        likes: number,
        createMinutesAgo: string,
        categories: CategoryType[],
        user: UserType,
        comments: CommentType[]
    } | undefined,
}

const CommentComponent: React.FC<CommentComponentType> = ({
    postInfo
}: CommentComponentType) => {
    return (
        <div className='post--info--comment-container'>
            {postInfo?.comments.map((comment: CommentType) => {
                return (
                    <div className='post--comment'>
                        {comment.nickname} {comment.comment}
                    </div>
                )
            })}
        </div>
    )
}

export default CommentComponent;