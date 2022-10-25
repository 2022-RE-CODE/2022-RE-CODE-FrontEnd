import { RootState } from '../../redux'
import { useSelector, useDispatch } from 'react-redux';
import SecesstionComponent from '../../components/Auth/sucessionComponent';

export const SecessionContainer = () => {

    const token = useSelector((state: RootState) => state.userReducer.token);

    return (
        <div className='sucesstion-container'>
            <SecesstionComponent token={token}/>
        </div>
    )
}