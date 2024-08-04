import "./Component.css";
import { useState } from "react";
export const Registration = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Handler = () => {
    console.log(Name);
    console.log(Email);
    console.log(password);
  };

  return (
    <div className="FormContainer">
      <h1 className="Heading">Registration</h1>
      <form action="" onSubmit={Handler}>
        <section>
          <label htmlFor="Name"> Name </label>
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault();
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
        </section>
        <section>
          <label htmlFor="Name"> Email </label>
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault();
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
        </section>
        <section>
          <label htmlFor="Name"> Password </label>
          <input
            type="password"
            onChange={(e) => {
              e.preventDefault();
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
          />
        </section>
        <button type="sumbit" className="btn">
          Register user
        </button>
        <div className=" Execiteduser">
          Already have An Account ?<p className=" Loginoption"> Login</p>
        </div>
        <div>
          <p>{Name}</p>
          <p>{Email}</p>
          <p>{password}</p>
        </div>
      </form>
    </div>
  );
};
