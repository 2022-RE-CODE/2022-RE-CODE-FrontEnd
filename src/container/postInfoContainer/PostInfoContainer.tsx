import HeaderComponent from '../../components/common/headerComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import instance from '../../components/api/axios.instance'
import PostInfoComponent from '../../components/post/postInfoComponent'
import { logoutSuccess } from '../../redux/user/action/user.action'
import useCheckToken from '../../utils/useCheckToken'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FooterComponent from '../../components/common/footerComponent'

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
        getUserInfo(params.id);
    }, []);

    const getUserInfo = async (id: string | undefined) => {
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
        </div>
    )
}