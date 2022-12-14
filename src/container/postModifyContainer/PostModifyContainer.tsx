import HeaderComponent from '../../components/common/headerComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { logoutSuccess } from '../../redux/user/action/user.action'
import useCheckToken from '../../utils/useCheckToken'
import PostModifyComponent from '../../components/Post/postModifyComponent'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import instance from '../../components/api/axios.instance'

export const PostModifyContainer = () => {

    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();
    const [postInfo, setPostInfo] = useState();
    const { postId } = useParams();

    const onLogout = () => {
        dispatch(logoutSuccess());
    }

    useEffect(() => {
        getPostInfo(postId);
    }, [postId]);

    useEffect(() => {
        if (isAuthenticated === false) navigate('/fobbiden');
    }, [isAuthenticated, navigate])

    const getPostInfo = async (id: string | undefined) => {
        try {
            const response = await instance.get(`post/find/detail/${id}`);
            setPostInfo(response.data);
        } catch (err) {
            // TODO :: 예외 처리
            // setMessage(err);
        }
    }

    useCheckToken();

    return (
        <div className="post-info-container">
            <HeaderComponent
                isAuthenticated={isAuthenticated}
                onLogout={onLogout}
                />
            <PostModifyComponent 
                isAuthenticated={isAuthenticated}
                postInfo={postInfo}
            />
        </div>
    )
}