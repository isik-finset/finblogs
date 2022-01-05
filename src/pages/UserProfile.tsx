import React, { useState } from 'react';
// @mui
import { Container, Typography, TextField, Box, Button } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

interface UseProfileTypes {

  firstName: string,
  lastName: string,
  email: string,
  password: string

}


// use custom hook for controlling form

const useFormHook = (props: UseProfileTypes) => {
  const [form, setFrom] = useState(props);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrom({ ...form, [e.target.name]: e.target.value })
    console.log(form);
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(form))
  }

  return {
    form,
    handleFormChange,
    handleFormSubmit

  }
}


export default function UserProfilePage() {

  const { form, handleFormChange, handleFormSubmit } = useFormHook({ firstName: "", lastName: "", email: "", password: "" })

  const { firstName, lastName, email, password } = form;

  return (
    <Page title="User Profile Page">
      <Container>
        <Box>
          <form onSubmit={handleFormSubmit}>
            <Typography variant="h3" component="h1" paragraph>
              User Profile Page
            </Typography>
            <Typography>
              First Name:
            </Typography>
            <TextField fullWidth name="firstName" value={firstName} onChange={handleFormChange} />
            <Typography>
              Last Name:
            </Typography>
            <TextField fullWidth name="lastName" value={lastName} onChange={handleFormChange} />
            <Typography>
              Email:
            </Typography>
            <TextField fullWidth name="email" value={email} onChange={handleFormChange} />
            <Typography>
              Password
            </Typography>
            <TextField fullWidth name="password" value={password} onChange={handleFormChange} />
            <Box sx={{ my: 2 }}>
              <Button fullWidth variant="contained" size="large" type="submit">
                Sign Up
              </Button>
            </Box>
          </form>
        </Box>

      </Container>
    </Page>
  );
}
