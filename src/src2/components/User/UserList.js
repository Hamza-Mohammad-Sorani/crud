import { Fragment, useState } from 'react';
import style from './UserList.module.css';
import UserItem from './UserItem';
import NoUserFound from './NoUserFound';

const UserList = ( { users } ) => {
    return (
      <Fragment>
        { users && users.length > 0 ?
          <table className={ style.tab }>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserItem
                    user = {user}
                />
            ))}
            </tbody>
          </table>
          : <NoUserFound />
        }
        </Fragment>
    );
};

export default UserList;

/*
          {users && users.map((user) => (
                <UserItem
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    mobile={user.mobile}
                />
            ))};
            */