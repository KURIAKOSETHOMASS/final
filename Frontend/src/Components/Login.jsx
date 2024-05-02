import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (response.ok) {
        // Handle successful login (redirect, set user session, etc.)
      } else {
        // Handle login error (display error message, reset form, etc.)
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div style={{ padding: "170px", marginTop: "20px" }}>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <br /><br />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <br /><br />
      <Button variant="contained" onClick={handleLogin} style={{ marginRight: '10px' }}>LOGIN</Button>
      <Button variant="contained" color="primary">
        <Link to={'/signup'} style={{ textDecoration: 'none', color: 'white' }}>Signup</Link>
      </Button>
    </div>
  );
};

export default Login;
