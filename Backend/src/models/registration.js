import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      unique: true,
      required: true,
      unique: true,
    },
    userPassword: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Register = mongoose.model("registers", UserSchema);
export default Register;
