import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserType } from '../../redux/user/reducer/user.reducerType';
import '../../styles/comment.css';
import instanceWithToken from '../api/axiosWithToken.instance';
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

    const [comment, setComment] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const commentHandler = (e: any) => {
        e.preventDefault();
        setComment(e.target.value);
    };

    const reset = () => {
        setComment("");
    }

    const submitHandler = async () => {
        await instanceWithToken.post(`/comment/create/${id}`, JSON.stringify({
            comment: comment
        }));
        window.location.reload();
    }

    return (
        <div className='post--info--comment-container'>
            <div className='post--info--comment--title'>피드백 전체보기</div>
            <div className='post--info--comment-all'>
                {postInfo?.comments.map((comment: CommentType) => {
                    return (
                        <div className='post--comment'>
                            <div className='post--comment-nickname'>{comment.nickname}님의 피드백</div>
                            <div className='post--comment-content'>{comment.comment}</div>
                        </div>
                    )
                })}
            </div>
            <div className='post--info--comment-form'>
                <textarea placeholder='피드백 추가하기' onChange={commentHandler} value={comment}></textarea>
                <div className='post--info--comment--button-wrapper'>
                    <button className='post--info--comment-resetBtn' onClick={reset}>취소</button>
                    <button className='post--info--comment-submitBtn' onClick={submitHandler}>확인</button>
                </div>
            </div>
        </div>
    )
}

export default CommentComponent;