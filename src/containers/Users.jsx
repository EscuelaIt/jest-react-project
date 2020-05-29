import React, { useState, useEffect } from 'react';
import User from './../components/User';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(data => data.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <User key={user.id} id={user.id} email={user.email} name={user.name} />
      ))}
    </div>
  );
};

export default Users;
