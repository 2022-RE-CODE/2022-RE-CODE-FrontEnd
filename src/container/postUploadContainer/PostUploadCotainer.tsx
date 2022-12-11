import HeaderComponent from '../../components/common/headerComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { logoutSuccess } from '../../redux/user/action/user.action'
import useCheckToken from '../../utils/useCheckToken'
import PostUploadComponent from '../../components/Post/postUploadComponent'

export const PostUploadContainer = () => {

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
            <PostUploadComponent 
                isAuthenticated={isAuthenticated}
            />
        </div>
    )
}