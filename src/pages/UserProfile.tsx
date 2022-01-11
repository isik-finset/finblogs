// @mui
import { Container, Typography, Box, Button } from '@mui/material';
// components
import Page from '../components/Page';
// router
import { useNavigate } from 'react-router';
// hooks
import useAuth from 'src/hooks/useAuth';

// ----------------------------------------------------------------------

export default function UserProfilePage() {

  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Page title="User Profile Page">
      <Container>
        <Box>
          <Typography variant="h3" component="h1" paragraph>
            User Profile Page
          </Typography>
          <Typography>
            About:
          </Typography>
          <Typography>
            {user.about}
          </Typography>
          <Typography>
            Address:
          </Typography>
          <Typography>
            {user.address}
          </Typography>
          <Typography>
            City:
          </Typography>
          <Typography>
            {user.city}
          </Typography>
          <Typography>
            Country:
          </Typography>
          <Typography>
            {user.country}
          </Typography>
          <Typography>
            Name:
          </Typography>
          <Typography>
            {user.displayName}
          </Typography>
          <Typography>
            ID:
          </Typography>
          <Typography>
            {user.id}
          </Typography>

          <Box>
            <Button variant="contained" onClick={() => navigate("/register")}>
              Go to Register
            </Button>
          </Box>
        </Box>
      </Container>
    </Page>
  )


}
