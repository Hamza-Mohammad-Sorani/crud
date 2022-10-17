import { Link } from 'react-router-dom';
import style from './NoUserFound.module.css';

const NoUserFound = () => {
    return (
        <div className={style.nouser}>
            <p>No Useres Found!</p>
            <Link  to='/'  className='btn'> Add User </Link>
        </div>
    );
};

export default NoUserFound;