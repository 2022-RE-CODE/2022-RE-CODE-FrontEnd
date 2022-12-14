import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../redux';
import '../../styles/comment.css';
import instanceWithToken from '../api/axiosWithToken.instance';
import { CommentType } from './postType';

type CommentComponentType = {
    comments: CommentType[] | undefined
}

const CommentComponent: React.FC<CommentComponentType> = ({
    comments
}: CommentComponentType) => {

    const [comment, setComment] = useState("");
    const [hover, setHover] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();
    const userId = useSelector((state: RootState) => state.userReducer.user?.userId);

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

    const deleteComment = async (commentId: number) => {
        await instanceWithToken.delete(`comment/delete/${commentId}`);
        window.location.reload();
    }

    return (
        <div className='post--info--comment-container'>
            <div className='post--info--comment--title'>피드백 전체보기</div>
            <div className='post--info--comment-all'>
                {comments?.map((comment: CommentType) => {
                    return (
                        <div
                            className='post--comment'
                            onMouseOver={() => { setHover(comment.commentId) }}
                            onMouseOut={() => { setHover(0) }}>
                            <div
                                className='post--comment-nickname'
                                onClick={() => { navigate(`/user/${comment.userId}`) }}>{comment.nickname}님의 피드백</div>
                            <div className='post--comment-content'>{comment.comment}</div>
                            {(comment.userId === userId && hover === comment.commentId) ?
                                <>
                                    <div
                                        className='post--comment-btn'
                                        onClick={() => { deleteComment(comment.commentId) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </> : null
                            }
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