import { useState, useEffect } from "react";
import Signin from "./auth/components/signin.js";
import Findjobs from "./jobs/components/findjobs.js";
function App() {
  const [local, setLocal] = useState({});
  let obj = {};
  obj["email"] = localStorage.getItem("email");
  obj["password"] = localStorage.getItem("password");
  useEffect(() => {
    setLocal(obj);
  }, []);
  return (
    <div className="App">
      {local !== {} ? (
        local.email === "admin@jobhunt.com" && local.password === "admin123" ? (
          <Findjobs />
        ) : (
          <Signin value={{ setLocal }} />
        )
      ) : (
        <Signin value={{ setLocal }} />
      )}
    </div>
  );
}

export default App;
