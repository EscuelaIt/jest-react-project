import React from 'react';
import { getUsers } from './../hooks/user';
import User from './../components/User';

const Users = () => {

  const users = getUsers("https://jsonplaceholder.typicode.com/users");

  const handlerDelete = (id, event) => {
    console.log(id);
  }

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} handlerDelete={handlerDelete} />
      ))}
    </div>
  );
};

export default Users;
