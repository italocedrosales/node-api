import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

const port = process.env.PORT || 3333;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
