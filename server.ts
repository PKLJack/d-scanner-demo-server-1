import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health-check", (req, res) => {
  res.send("OK");
});

app.post("/scanner-to-raw", (req, res) => {
  console.log("body", req.body);
  res.json({ msg: "Hi from web server" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
