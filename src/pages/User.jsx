import { useState } from "react";
import LoadingState from '../components/states/LoadingState';
import ErrorState from '../components/states/ErrorState';
import { loginUser } from "../services/authService";

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
    <article >
    {error && <ErrorState message={error} />}

    <form  onSubmit={handleSubmit}>
      <h1>Account Sign In</h1>
      <div className="wrapper_account">
        <div className="account_structure">
          <label>Email</label><input 
      htmlFor="email"
        placeholder="Email Address"
        id="email"
        name="email" 
        type="text" 
        required 
        value={loginData.email}
        onChange={handleChange}
      />
      <label>Password</label><input 
      htmlFor="password"
      placeholder="Password"
        id="password"
        name="password" 
        type="password" 
        required 
        value={loginData.password}
        onChange={handleChange}
        />
        </div>
      </div>
      
      <button style={{
        marginTop: "1rem"
      }} type="submit">Login</button>
      
    </form>

      <hr style={{
        maxWidth: "600px",
        marginTop: "1rem"
      }}/>

      <form >
        <h1>Create an Account</h1>
        <div className="wrapper_account">
          <div className="account_structure">
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
          </div>
        </div>

        <button style={{
          marginTop: "1rem"
        }}>Register</button>
      </form>
    </article>
  );
}