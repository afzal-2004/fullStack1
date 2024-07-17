// import dotenv from "dotenv";

import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World I  am connnected to Frounted");
});
app.listen(PORT, () => {
  console.log(` Server is Running on : ${PORT} `);
});
