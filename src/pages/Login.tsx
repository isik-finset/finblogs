// @mui
import { Container, Typography, TextField, Box, Button } from '@mui/material';
// components
import Page from '../components/Page';
// hooks
import useLogin from 'src/hooks/useLogin';
// axios
import axiosInstance from 'src/utils/axios';
import React, { useContext, useState } from 'react';
// import { useAuth } from 'src/hooks/useAuth'

// provider
import { TokenContext } from 'src/providers';

// ----------------------------------------------------------------------


// Guards
// useReducer
// improve router
// validation - login regex : done

export default function LandingPage() {
  const defaultValues = {
    email: "",
    password: "",
  }

  const { updateToken } = useContext(TokenContext);
  const { form, handleChange, emailValidation } = useLogin(defaultValues);
  const { email, password } = form;

  // states
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");



  const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const isEmailValid = emailValidation(form.email);
    isEmailValid ? setMessage("Email address is valid") : setMessage("Email address is invalid")


    if (isEmailValid) {
      setIsValid(true)
      try {
        const result = await axiosInstance.post('/api/account/login', {
          email: form.email,
          password: form.password
        })
        if (result.status === 200) {
          console.log(result);
          updateToken(result.data.accessToken)
          console.log(result.data.accessToken);
        }
      } catch (e) {
        alert('there is something wrong')
      }
    } else {
      setIsValid(false)
    }

  }
  // https://medium.com/geekculture/how-to-use-context-api-and-jwt-to-maintain-user-sessions-eb5602e83a03

  return (
    <Page title="Login Page">
      <Container sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" paragraph>
          Login
        </Typography>
        <Box>

          <Typography>
            Email:
          </Typography>
          <TextField name="email" value={email} onChange={handleChange} fullWidth />
          <Typography sx={{ color: isValid ? 'green' : 'red' }}>
            {message}
          </Typography>
          <Typography>
            Password:
          </Typography>
          <TextField name="password" value={password} onChange={handleChange} fullWidth />
          <Box sx={{ my: 2 }}>
            <Button component="button" onClick={onSubmit} fullWidth variant="contained" size="large">
              Submit
            </Button>
          </Box>

        </Box>
      </Container>
    </Page>
  );
}


