import React, { useState, useEffect } from 'react';
import User from './../components/User';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(data => data.json())
      .then(data => setUsers(data));
  }, []);

  const handlerDelete = (id, event) => {
    console.log(id);
  }

  return (
    <div>
      {users.map((user, index) => (
        <User key={user.id} user={user} handlerDelete={handlerDelete} />
      ))}
    </div>
  );
};

export default Users;
