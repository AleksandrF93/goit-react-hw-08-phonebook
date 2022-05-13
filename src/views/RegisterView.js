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
export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
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
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField sx={{ mt: 4}}
                  autoComplete="given-name"
                  aria-label="Input for your name"
                  type="text"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  value={name} onChange={handleChange}
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  autoFocus
            />
            

        <TextField sx={{ mt: 3}}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  aria-label="Input for your Email"
                  pattern="/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$"
                  autoComplete="email"
                  value={email}
                 onChange={handleChange}
            />
            
        
        <TextField sx={{ mt: 3}}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  aria-label="Input for your password"
                  value={password}
                  onChange={handleChange}
                />
        
        <Button fullWidth sx={{ mt: 3 }} variant="contained" color="success"  type='submit'>SIGN UP</Button>
          </form>
          </Box>
        </Container>
    </>
  );
}
