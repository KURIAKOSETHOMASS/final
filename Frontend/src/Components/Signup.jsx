import React, { useState } from 'react';
import { TextField, Card, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: '',
    phNo: '',
    username: '',
    password: '',
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const addHandler = () => {
    axios.post('http://localhost:8000/signup', inputs) // Change the endpoint URL as per your backend route
      .then((response) => {
        console.log(response.data);
        alert('Signup successful!');
        // Optionally, redirect the user to a different page after successful signup
      })
      .catch((error) => {
        console.error('Error during signup:', error);
        alert('Signup failed! Please try again.');
      });
  };

  return (
    <div style={{
      background: 'url("images/Restobackground.jpg")',
      backgroundSize: 'cover',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Card variant="outlined" style={{ width: '300px', padding: '20px' }}>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={inputs.email}
          onChange={inputHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          style={{ marginBottom: '20px' }}
        />
        <TextField
          label="Ph.no"
          type="number"
          name="phNo"
          value={inputs.phNo}
          onChange={inputHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactPhoneIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          style={{ marginBottom: '20px' }}
        />
        <TextField
          label="Username"
          name="username"
          value={inputs.username}
          onChange={inputHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
          style={{ marginBottom: '20px' }}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={inputs.password}
          onChange={inputHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          style={{ marginBottom: '20px' }}
        />
        <Button variant="contained" style={{ backgroundColor: 'green' }} color="success" onClick={addHandler}>SIGN-UP</Button>
      </Card>
    </div>
  );
};

export default Signup;
