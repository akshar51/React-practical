import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState({})
  const navi = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validation()) return;

    navi("/client")

  };


  const validation = ()=>{
    let error = {};
    if(!email) error.email = "Email is required !!!"
    if(!password) error.password = "Password is required !!!"
    setError(error)
    return Object.keys(error).length === 0;
  }


  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🔐 Login</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          
            {error.email && <span className="text-danger fw-bold">{error.email}</span>}
          
        </div>
        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {error.password && <span className="text-danger fw-bold">{error.password}</span>}
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
