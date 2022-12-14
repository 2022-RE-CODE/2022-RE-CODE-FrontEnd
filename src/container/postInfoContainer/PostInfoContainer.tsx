import HeaderComponent from '../../components/common/headerComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import instance from '../../components/api/axios.instance'
import PostInfoComponent from '../../components/Post/postInfoComponent'
import { logoutSuccess } from '../../redux/user/action/user.action'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FooterComponent from '../../components/common/footerComponent'
import { useCheckToken } from '../../utils'
import instanceWithToken from '../../components/api/axiosWithToken.instance'

export const PostInfoContainer = () => {

    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();
    const [postInfo, setPostInfo] = useState();
    const params = useParams();

    const onLogout = () => {
        dispatch(logoutSuccess());
    }
    
    useCheckToken();
    useEffect(() => {
        if (isAuthenticated === false) navigate('/fobbiden');
    }, [])
    
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
            await instanceWithToken.put(`likes/${id}`);
            window.location.reload();
        } catch (err) {
            // TODO :: 예외 처리
        }
    }

    useEffect(() => {
        getPostInfo(params.id); 
    }, [params.id]);

    return (
        <div className="post-info-container">
            <HeaderComponent
                isAuthenticated={isAuthenticated}
                onLogout={onLogout}
            />
            <PostInfoComponent
                postInfo={postInfo}
                ToggleLikes={ToggleLikes}
            />
            <FooterComponent />
        </div>
    )
}