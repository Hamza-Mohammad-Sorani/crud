import { Link } from 'react-router-dom';
import style from './UserItem.module.css';

const UserItem = ({user}) => {

    const deleteHandler = () => {
        user.onDelete(user.id);
  };

    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td className={ style.actionBtns }>
          <Link className={style.editBtn} to={`/user/${user.id}/edit`}>Edit</Link>
          <button className={style.deleteBtn} onClick={deleteHandler}>Delete</button>
        </td>
      </tr>
    );
};

export default UserItem;