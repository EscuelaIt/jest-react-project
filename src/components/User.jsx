import React from 'react';
import { Link } from 'react-router-dom';

const User = ({email, name, id}) => {

  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <Link to={`/users/${id}`}>
        Detail
      </Link>
    </div>
  );
};

export default User;