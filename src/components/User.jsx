import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user, handlerDelete}) => {

  const { name, email, id } = user;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <Link to={`/users/${id}`}>
        Detail
      </Link>
      <button onClick={(e) => handlerDelete(id, e)}>Eliminar</button>
    </div>
  );
};

export default User;