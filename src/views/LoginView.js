import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};
export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
       <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
          alignItems: 'center',
          }}
        >
      <h1>Login page</h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        
          <TextField
              margin="normal"
              type="email"
              aria-label="Input for your email"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={handleChange}
              autoFocus
            />
        
        
          <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
              autoComplete="current-password"
              aria-label="Input for your password"
            />
        
        <Button variant="contained" color="success"  type='submit' fullWidth sx={{ mt: 3, mb: 2 }}>Sign in</Button>
        </form>
        </Box>
        </Container>
    </>
  );
}