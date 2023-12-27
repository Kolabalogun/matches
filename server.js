/* eslint-disable no-undef */
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/api", async (req, res) => {
  //   const url = `https://api.football-data.org/v2${req.url}`; // all matches

  const url = `https://api.football-data.org/v4/competitions/PL/matches?matchday=20 `; // pl matches
  const response = await fetch(url, {
    headers: {
      "X-Auth-Token": "a621e855bacc4de0b5d86da4ad62a525",
    },
  });
  const data = await response.json();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
