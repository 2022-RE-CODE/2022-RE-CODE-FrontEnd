import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../redux';
import { UserType } from '../../redux/user/reducer/user.reducerType';
import '../../styles/comment.css';
import instanceWithToken from '../api/axiosWithToken.instance';
import { CategoryType, CommentType } from './postType';

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
                            onMouseOver={() => {setHover(comment.commentId)}} 
                            onMouseOut={() => {setHover(0)}}>
                            <div 
                                className='post--comment-nickname'
                                onClick={() => {navigate(`/user/${comment.userId}`)}}>{comment.nickname}님의 피드백</div>
                            <div className='post--comment-content'>{comment.comment}</div>
                            {/* TODO :: 하드코딩 변경, commentid로 변경 */}
                            {(comment.userId == userId && hover === comment.commentId) ?
                                <>
                                    <div
                                        className='post--comment-btn'
                                        onClick={() => {deleteComment(comment.commentId)}}>
                                        삭제
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