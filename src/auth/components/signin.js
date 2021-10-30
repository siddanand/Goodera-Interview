import Styles from "../styles/signin.module.css";
import { useState } from "react";
export default function Signin(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmithandler = (e) => {
    e.preventDefault();
    if (email === "admin@jobhunt.com" && password === "admin123") {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      let obj = {};
      obj["email"] = email;
      obj["password"] = password;
      props.value.setLocal(obj);
    } else {
      alert("enter correct details");
    }
  };
  return (
    <div className="container-fluid" id={Styles.container}>
      <div id={Styles.box}>
        <p id={Styles.heading}>Welcome back!</p>
        <form onSubmit={(e) => onSubmithandler(e)}>
          <label id={Styles.label}>Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id={Styles.input}
            required
          />
          <br />
          <label id={Styles.label}>Password</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id={Styles.input}
            required
          />
          <br />
          <button id={Styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
