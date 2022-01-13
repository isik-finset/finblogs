import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ImageFeature from './ImageFeature';
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Footer from './Footer';
import { imageFeaturePost } from './ImageFeaturePost'


interface BlogProps {
    props: {
        title: string;
        description: string;
        body: string;   // ReadonlyArray<string>;
        firstName: string;
        lastName: string;
        createdAt: string;
        topic: string;
        readTime: string;
    }
}

const theme = createTheme();

const Blog = ({ props }: BlogProps) => {

    const { title, body, description, firstName, lastName, topic, readTime, createdAt } = props;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', height: '100vh', marginBottom: '50px' }}>
                <main>
                    <ImageFeature post={imageFeaturePost} />
                    <Divider sx={{ mb: '15px' }} />
                    <Typography variant='h3' gutterBottom>
                        {title}
                    </Typography>

                    <Box>
                        <Typography variant="caption">
                            By {firstName} {lastName}
                        </Typography>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                            {createdAt} ( {readTime} min read )
                        </Typography>
                    </Box>
                    <Box my={3}>
                        <Typography variant="h6" color="text.secondary">
                            {description}
                        </Typography>
                    </Box>
                    <Box >
                        <Typography variant="body2" color="inherit" paragraph>
                            {body}
                        </Typography>
                    </Box>
                </main>
            </Container>
            <Footer />
        </ThemeProvider>
    )
}

export default Blog;