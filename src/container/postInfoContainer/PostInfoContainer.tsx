import HeaderComponent from '../../components/common/headerComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import instance from '../../components/api/axios.instance'
import PostInfoComponent from '../../components/Post/postInfoComponent'
import { logoutSuccess } from '../../redux/user/action/user.action'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FooterComponent from '../../components/common/footerComponent'
import { useCheckToken } from '../../utils'
import CommentComponent from '../../components/Post/commentComponent'
import instanceWithHeader from '../../components/api/axiosWithHeader.instance'

export const PostInfoContainer = () => {

    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutSuccess());
    }

    useCheckToken();

    const [postInfo, setPostInfo] = useState();
    const params = useParams();

    useEffect(() => {
        getPostInfo(params.id);
    }, [params.id]);

    const getPostInfo = async (id: string | undefined) => {
        try {
            const response = await instance.get(`post/find/detail/${id}`);
            setPostInfo(response.data);
        } catch (err) {
            // TODO :: 예외 처리
            // setMessage(err);
        }
    }

    const ToggleLikes = async (id: number | undefined) => {
        try {
            await instanceWithHeader.put(`likes/${id}`);
        } catch (err) {
            // TODO :: 예외 처리
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
                ToggleLikes={ToggleLikes}
            />
            <FooterComponent />
        </div>
    )
}