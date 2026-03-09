import { useState } from "react";
import LoadingState from '../components/states/LoadingState';
import ErrorState from '../components/states/ErrorState';import { loginUser } from "../services/authService";

export default function User(){
  const [loginData, setLoginData] = useState(
    {
      email: "",
      password: ""
    }
  ); 
  const [registerData, setRegisterData] = useState(
    {
      email: "",
      password: "",
      username: "",
      name: ""
    }
  );
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError(null)
    try {
      const user = await loginUser(loginData.email, loginData.password);
      console.log("User logging in:", user);
      
    } catch (error) {
      setError(error)
    }
    setLoading(false);
    }
    if (loading) return <LoadingState />

  return (
    <div>
    {error && <ErrorState message={error} />}

    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="email">Email Address</label>
      <input 
        id="email"
        name="email" 
        type="text" 
        required 
        value={loginData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input 
        id="password"
        name="password" 
        type="password" 
        required 
        value={loginData.password}
        onChange={handleChange}
        />
      <button type="submit">Login</button>
    </form>

      <form >
        <h1>Register an Account</h1>
        <label>First Name: </label>
        <input 
          type="text" 
          required 
        />
        <label>Last Name: </label>
        <input 
          type="text" 
          required 
        />
        <label>Email Address: </label>
        <input 
          type="text" 
          required 
        />
        <label>Password: </label>
        <input 
          type="text" 
          required 
        />
        <button>Register</button>
      </form>
    </div>
  );
}