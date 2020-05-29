import React, { useEffect, useState } from 'react';

const UserDetail = ({ match }) => {
  const [user, setUser] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(data => data.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default UserDetail;
