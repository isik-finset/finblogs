// @mui
import { Container, Typography, TextField, Box, Button, CssBaseline, Link, Grid } from '@mui/material';
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
// styles
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



// ----------------------------------------------------------------------

// Guards : done
// useReducer
// improve router : done
// validation - login regex : done


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        BetterDay
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function LandingPage() {
  const theme = createTheme();
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
    // <Page title="Login Page">
    //   <Container sx={{ my: 4 }}>
    //     <Typography variant="h3" component="h1" paragraph>
    //       Login
    //     </Typography>
    //     <Box>

    //       <Typography>
    //         Email:
    //       </Typography>
    //       <TextField name="email" value={form.email} onChange={handleChange} fullWidth />
    //       <Typography sx={{ color: isValid ? 'green' : 'red' }}>
    //         {message}
    //       </Typography>
    //       <Typography>
    //         Password:
    //       </Typography>
    //       <TextField name="password" value={form.password} onChange={handleChange} fullWidth />
    //       <Box sx={{ my: 2 }}>
    //         <Button component="button" onClick={onSubmit} fullWidth variant="contained" size="large">
    //           Submit
    //         </Button>
    //       </Box>

    //     </Box>
    //   </Container>
    // </Page>

    <ThemeProvider theme={theme}>
      <Page title="Login Page">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email" value={form.email} onChange={handleChange}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password" value={form.password} onChange={handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                component="button"
                onClick={onSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </Page>
    </ThemeProvider>
  );
}


