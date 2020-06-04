import { useState, useEffect } from "react";

export const getUsers = (api) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(data => data.json())
      .then(data => setUsers(data));
  }, []);

  return users;
}