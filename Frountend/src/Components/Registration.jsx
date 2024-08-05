import "./Component.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Registration = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Handler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/registers", { Name, Email, password })
      .then((result) => {
        toast.success("Accout Created");
        console.log(result);
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Somthing Went Wrong");
      });
    console.log(Name, Email, password);
  };

  return (
    <>
      <ToastContainer autoClose={3000} />

      <div className="FormContainer">
        <h1 className="Heading">Registration</h1>
        <form action="" onSubmit={Handler}>
          <section>
            <label htmlFor="Name"> Name </label>
            <input
              type="text"
              required
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </section>
          <section>
            <label htmlFor="Name"> Email </label>
            <input
              type="text"
              required
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </section>
          <section>
            <label htmlFor="Name"> Password </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </section>
          <button type="submit" className="btn">
            Register user
          </button>
          <div className=" Execiteduser">
            Already have An Account ?<p className=" Loginoption"> Login</p>
          </div>
        </form>
      </div>
    </>
  );
};
