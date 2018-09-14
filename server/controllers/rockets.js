const axios = require("axios");

let rockets = [];

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
    console.log(response);
    // res.status(200).json(response.data);
    rockets = response.data;
    res.status(200).json(rockets);
  });
};

module.exports = {
  getRockets
};
