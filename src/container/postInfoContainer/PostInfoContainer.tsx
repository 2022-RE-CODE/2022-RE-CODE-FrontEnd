import HeaderComponent from '../../components/headerComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import instance from '../../components/api/axios.instance'
import PostInfoComponent from '../../components/Post/postInfoComponent'
import { logoutSuccess } from '../../redux/user/action/user.action'
import useCheckToken from '../../utils/useCheckToken'

export const PostInfoContainer = () => {

    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutSuccess());
    }

    useCheckToken();    

    return (
        <div className="post-info-container">
            <HeaderComponent
                isAuthenticated={isAuthenticated}
                onLogout={onLogout}
            />
            <PostInfoComponent 
                isAuthenticated={isAuthenticated}
            />
        </div>
    )
}