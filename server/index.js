const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const rc = require("./controllers/rockets.js");

const app = express();
app.use(bodyParser.json());

app.get("/api/rockets", rc.getRockets);

const port = 3001;
app.listen(port, () => {
  console.log(`heyyyyyyo from port ${port}`);
});
