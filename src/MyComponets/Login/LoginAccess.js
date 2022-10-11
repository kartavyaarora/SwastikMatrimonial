import "./App.css";
import Main from "../Main";
import { useState } from "react";
import LogIn from "./LogIn";
function App() {
  const adminUser={
    branch: "delhi",
    password: "pass123"
  }

  const[user, setUser]=useState({branch:""});
  const [error, setError]= useState("");

  const Login=details=>{
    if (details.branch === adminUser.branch && details.password===adminUser.password){
      setUser({
         branch:details.branch
      });
    }else{
      setError("Inncorrect Branch or Password");
    }

  }

  const Logout=()=> {
    setUser({branch:""});
  }
  return (
    <>
    <div>
      {(user.branch !=="") ? (
          <Main Logout={Logout}/>
      ):(
        <LogIn Login={Login} error={error}/>
      )}
    </div>
    </>
  );
}
export default App;
