/* eslint-disable no-undef */
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/api/:matchDay", async (req, res) => {
  const matchDay = req.params.matchDay; // Access the matchDay parameter from the route
  console.log(matchDay);
  const url = `https://api.football-data.org/v4/competitions/PL/matches?matchday=${matchDay}`;
  const response = await fetch(url, {
    headers: {
      "X-Auth-Token": "a621e855bacc4de0b5d86da4ad62a525",
    },
  });
  const data = await response.json();
  return res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
