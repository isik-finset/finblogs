import React, { useState } from 'react'
// @mui
import { Container, Typography, TextField, Box, Button } from '@mui/material';

// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

// function useForm(form){
//   const [form, setForm] = useState(form)
//   return {
//     form,
//     resetForm,
//     handleChange
//   }
// }

// interface Props {
//   name: string;
//   onExit: () => void;
// }

/* <LandingPage name="asdas" onExit={() => console.log }  /> */

interface LoginForm {
  form: {
    email: string
    password: string
  }
}

const useCustomForm = (form: LoginForm) => {

  const [form, setForm] = useState("")

  const resetForm = (form) => setForm(form)

  return {
    form,
    resetForm,
    handleSubmit
  }
}


export default function LandingPage() {
  // const { name, onExit } = props;
  // const { form, handleChange } = useForm({email: ''})


  const [email, setEmail] = useState<string>("");
  console.log(email);
  const [password, setPassword] = useState<string>("");
  console.log(password);

  return (
    <Page title="Login Page">
      <Container>
        <Typography variant="h3" component="h1" paragraph>
          Login Page
        </Typography>
        <Box>
          <Typography>
            Email:
          </Typography>
          <TextField name="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} fullWidth />
          <Typography>
            Password:
          </Typography>
          <TextField name="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} fullWidth />
          <Box sx={{ my: 2 }}>
            <Button fullWidth variant="contained" size="large">
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Page>
  );
}


