import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  client.user.create({
    data: {
      username,
      password,
    },
  });
  res.json({ username, password });
});

app.listen(port);
