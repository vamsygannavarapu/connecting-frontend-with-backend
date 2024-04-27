// import { configDotenv } from "dotenv";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

const jokes = [
  { id: 1, content: "first joke" },
  { id: 2, content: "second joke" },
  { id: 3, content: "third joke" },
  { id: 4, content: "fourth joke" },
  { id: 5, content: "fifth joke" },
];

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`example app is running at ${port}`);
});
