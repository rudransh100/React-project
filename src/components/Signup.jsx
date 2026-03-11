import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import Login from "./Login";

const Signup = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const { signup, login } = useAuth();
  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();

  signup(email, password);

  // auto login
  login(email, password);

  alert("Account created successfully!");

  navigate("/");
};

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <h2>Create Account</h2>
        </div>

        <form onSubmit={handleSubmit}>

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="signin-btn">
            Sign Up
          </button>

        </form>

      </div>

    </div>
  );
};

export default Signup;