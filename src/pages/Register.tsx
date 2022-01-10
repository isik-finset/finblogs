// @mui
import { Container, Typography, TextField, Box, Button } from '@mui/material';
// components
import Page from '../components/Page';
// hooks
import useRegister from 'src/hooks/useRegister';

// ----------------------------------------------------------------------

export default function Register() {

    const { form, handleChange, handleSubmit } = useRegister({ firstName: "", lastName: "", email: "", password: "" })
    const { firstName, lastName, email, password } = form;

    return (
        <Page title="User Profile Page">
            <Container>
                <Box>
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h3" component="h1" paragraph>
                            Register Page
                        </Typography>
                        <Typography>
                            First Name:
                        </Typography>
                        <TextField fullWidth name="firstName" value={firstName} onChange={handleChange} />
                        <Typography>
                            Last Name:
                        </Typography>
                        <TextField fullWidth name="lastName" value={lastName} onChange={handleChange} />
                        <Typography>
                            Email:
                        </Typography>
                        <TextField fullWidth name="email" value={email} onChange={handleChange} />
                        <Typography>
                            Password
                        </Typography>
                        <TextField fullWidth name="password" value={password} onChange={handleChange} />
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
