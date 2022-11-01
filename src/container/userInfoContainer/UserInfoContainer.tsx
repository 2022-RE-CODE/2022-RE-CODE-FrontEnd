import HeaderComponent from '../../components/common/headerComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { logoutSuccess } from '../../redux/user/action/user.action'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserInfoComponent from '../../components/user/userInfoComponent'
import instance from '../../components/api/axios.instance'

export const UserInfoContainer = () => {

    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutSuccess());
    }

    const [user, setUser] = useState();
    //TODO :: Header IMG render

    const params = useParams();

    useEffect(() => {
        getUserInfo(params.id);
    }, []);

    const getUserInfo = async (id: string | undefined) => {
        try {
            const response = await instance.get(`user/${id}`);
            setUser(response.data);
        } catch (err) {
            // TODO :: 예외 처리
            // setMessage(err);
        }
    }

    return (
        <div className="userinfo-container">
            <HeaderComponent
                isAuthenticated={isAuthenticated}
                onLogout={onLogout}
            />
            <UserInfoComponent user={user} />
        </div>
    )
}