// @mui
import { Container, Typography, TextField, Box, Button } from '@mui/material';
// components
import Page from '../components/Page';
// hooks
import useLogin from 'src/hooks/useLogin';
import useAuth from 'src/hooks/useAuth';
// axios
import axiosInstance from 'src/utils/axios';
// react
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// ----------------------------------------------------------------------

// Guards : done
// useReducer
// improve router : done
// validation - login regex : done

export default function LandingPage() {
  const defaultValues = {
    email: "",
    password: "",
  }


  const navigate = useNavigate();

  // states
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  // hooks
  const { logIn } = useAuth();
  const { form, handleChange, emailValidation } = useLogin(defaultValues);


  // submit form -> validate -> login
  const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const isEmailValid = emailValidation(form.email);
    isEmailValid ? setMessage("Email address is valid") : setMessage("Email address is invalid")


    if (isEmailValid) {
      setIsValid(true)
      // logIn(form)
      try {
        const result = await axiosInstance.post('/api/account/login', {
          email: form.email,
          password: form.password
        })
        if (result.status === 200) {
          console.log(result);
          logIn(result.data.accessToken)
          console.log(result.data.accessToken);
          navigate('/user-profile')
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
          <TextField name="email" value={form.email} onChange={handleChange} fullWidth />
          <Typography sx={{ color: isValid ? 'green' : 'red' }}>
            {message}
          </Typography>
          <Typography>
            Password:
          </Typography>
          <TextField name="password" value={form.password} onChange={handleChange} fullWidth />
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


