const axios = require("axios");

let rockets = [];
let favorites = [];

// module.exports = {
//   getRockets(req, res) {
//     res.status(200).json(rockets);
//   }
// };
// axios.get("https://api.spacexdata.com/v2/rockets").then(response => {
//   rockets = response.data;
// });

const getRockets = (req, res) => {
  axios.get("https://api.spacexdata.com/v2/rockets").then(response => {
    // console.log(response);
    // res.status(200).json(response.data);
    rockets = response.data;
    res.status(200).json(rockets);
  });
};

const addRocket = (req, res) => {
  console.log(req.body);
  favorites.push(req.body);
  res.status(200).json(favorites);
};

const getFavorites = (req, res) => {
  res.status(200).json(favorites);
};

const deleteRocket = (req, res) => {
  console.log(req.params);
  let indexOfRocket = favorites.findIndex(rocket => rocket.id == req.params.id);
  favorites.splice(indexOfRocket, 1);
  res.status(200).json(favorites);
};

const updateRocket = (req, res) => {
  console.log(req.params);
  console.log(req.body);
  let updateId = req.params.id;
  favorites.forEach(
    rocket => (rocket.id == updateId ? Object.assign(rocket, req.body) : null)
  );
  res.status(200).json(favorites);
};

module.exports = {
  getRockets,
  addRocket,
  getFavorites,
  deleteRocket,
  updateRocket
};
