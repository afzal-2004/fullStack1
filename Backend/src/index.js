import express from "express";
import mongoose from "mongoose";
import Register from "./models/registration.js";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/Practice");

app.post("/registers", (req, res) => {
  const { Name, Email, password } = req.body;
  Register.findOne({ userEmail: Email })
    .then((user) => {
      if (user) {
        res.json("Already Have An Account ");
      } else {
        Register.create({
          userName: Name,
          userEmail: Email,
          userPassword: password,
        })
          .then((result) => res.json("Account Created"))
          .catch((e) => console.log("Something Went Wrong", e));
      }
    })
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(` Server is Running on : ${PORT} `);
});
