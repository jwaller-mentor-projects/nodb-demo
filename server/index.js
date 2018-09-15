const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const rc = require("./controllers/rockets.js");

const app = express();
app.use(bodyParser.json());

app.get("/api/rockets", rc.getRockets);
app.post("/api/favorites", rc.addRocket);

app.get("/api/favorites", rc.getFavorites);
app.delete("/api/rocket/:id", rc.deleteRocket);
app.put("/api/rocket/:id", rc.updateRocket);

const port = 3001;
app.listen(port, () => {
  console.log(`heyyyyyyo from port ${port}`);
});
