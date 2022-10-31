import { RootState } from '../../redux'
import { useSelector, useDispatch } from 'react-redux';
import SecessionComponent from '../../components/Auth/sucessionComponent';

export const SecessionContainer = () => {

    const token = useSelector((state: RootState) => state.userReducer.token);

    return (
        <div className='sucession-container'>
            <SecessionComponent token={token}/>
        </div>
    )
}