// @mui
import { Container, Typography, Box } from '@mui/material';
// components
import Page from '../components/Page';
// context related
import { useContext } from 'react';
import { TokenContext } from 'src/providers';

// ----------------------------------------------------------------------

export default function UserProfilePage() {

  const { user } = useContext(TokenContext);
  console.log(user);

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
        </Box>
      </Container>
    </Page>
  )


}
