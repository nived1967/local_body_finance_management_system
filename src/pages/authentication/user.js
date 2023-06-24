import React, { useState } from 'react';
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";

const User = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const navigate = useNavigate();
  const handleUserType=()=>{
    Cookies.set("userType","admin",{ expires: 30, path: '/' })
    navigate('/login/admin');
  }

  const handleLogin = () => {
    // Add your login logic here
    Cookies.set("username",username,{ expires: 30, path: '/' })
    Cookies.set("userType","User Logged In",{ expires: 30, path: '/' })
    console.log('Username:', username);
    console.log('Password:', password);
    navigate('/user')
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">User Login</h1>
      <div className="bg-white shadow p-6 rounded-lg w-80">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <div className="mt-4">
      If you are an admin,
      <button
      className="bg-blue-100 hover:bg-blue-400 text-black font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
      onClick={handleUserType}
    >
      Click Here
    </button>
      </div>
      <div className="mt-4">
      Click here to register,
      <button
      className="bg-blue-100 hover:bg-blue-400 text-black font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
      onClick={()=>navigate('/register/user')}
    >
      Register
    </button>
      </div>
    </div>
  );
};

export default User;
