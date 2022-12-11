import HeaderComponent from '../../components/common/headerComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import instance from '../../components/api/axios.instance'
import PostInfoComponent from '../../components/post/postInfoComponent'
import { logoutSuccess } from '../../redux/user/action/user.action'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FooterComponent from '../../components/common/footerComponent'
import { useCheckToken } from '../../utils'
import CommentComponent from '../../components/post/commentComponent'

export const PostInfoContainer = () => {

    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutSuccess());
    }

    useCheckToken();

    const [postInfo, setpostInfo] = useState();
    const params = useParams();

    useEffect(() => {
        getPostInfo(params.id);
    }, []);

    const getPostInfo = async (id: string | undefined) => {
        try {
            const response = await instance.get(`post/find/detail/${id}`);
            setpostInfo(response.data);
        } catch (err) {
            // TODO :: 예외 처리
            // setMessage(err);
        }
    }

    return (
        <div className="post-info-container">
            <HeaderComponent
                isAuthenticated={isAuthenticated}
                onLogout={onLogout}
            />
            <PostInfoComponent
                isAuthenticated={isAuthenticated}
                postInfo={postInfo}
            />
            <CommentComponent />
        </div>
    )
}