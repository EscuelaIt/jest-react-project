const getData = (results) => {
  return fetch(`https://randomuser.me/api/?results=${results}`)
    .then(response => response.json())
    .then(response => response.results.splice(0, 2))
    .catch(error => error);
};

export default getData;