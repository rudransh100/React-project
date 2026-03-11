import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email,password);

    if(success){
    //   alert("Login successful");
      navigate("/");
    }else{
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <h2>Welcome Back!</h2>
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
            Sign In
          </button>

          <p className="signup-text">
            Don't have an account?
            <span onClick={()=>navigate("/signup")}> Sign Up</span>
          </p>

        </form>

      </div>

    </div>
  );
};

export default Login;