import React, { useState } from 'react'
// @mui
import { Container, Typography, TextField, Box, Button } from '@mui/material';

// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

interface LoginTypes {
  email: string;
  password: string
}

// custom hook form
const useCustomForm = (props: LoginTypes) => {
  const [form, setForm] = useState(props)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form);
  }

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return {
    form,
    handleInputChange,
    handleInputSubmit
  }
}


export default function LandingPage() {
  const { form, handleInputChange, handleInputSubmit } = useCustomForm({ email: "", password: "" });

  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  const { email, password } = form;

  return (
    <Page title="Login Page">
      <Container>
        <Typography variant="h3" component="h1" paragraph>
          Login Page
        </Typography>
        <Box>
          <form onSubmit={handleInputSubmit}>
            <Typography>
              Email:
            </Typography>
            <TextField name="email" value={email} onChange={handleInputChange} fullWidth />
            <Typography>
              Password:
            </Typography>
            <TextField name="password" value={password} onChange={handleInputChange} fullWidth />
            <Box sx={{ my: 2 }}>
              <Button fullWidth variant="contained" size="large">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Page>
  );
}


