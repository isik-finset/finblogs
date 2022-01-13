import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseLine from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react';
import Page from 'src/components/Page';
import useBlog from 'src/hooks/useBlog';


const theme = createTheme;

const Write = () => {

    const { blog, handleChange, handleSubmit } = useBlog({ title: "", description: "", body: "", topic: "" })
    const { title, description, body, topic } = blog;

    return (

        <ThemeProvider theme={theme}>
            <CssBaseLine />

            <Container>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} >
                            <TextField
                                variant="standard"
                                name="title"
                                id="title"
                                label="Title"
                                fullWidth
                                required
                                autoFocus
                                value={title}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant='standard'
                                name="description"
                                id="description"
                                label="Description"
                                placeholder="Write a short description..."
                                multiline
                                required
                                fullWidth
                                value={description}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                name="body"
                                id="body"
                                label="Body"
                                multiline
                                placeholder="Tell your story..."
                                required
                                fullWidth
                                value={body}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                id="topic"
                                label="Topic"
                                name="topic"
                                placeholder="In a single word..."
                                multiline
                                required
                                fullWidth
                                value={topic}
                                onChange={handleChange}
                            />
                        </Grid>

                    </Grid>
                    {/* <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid> */}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Publish
                    </Button>
                </Box>
            </Container>

        </ThemeProvider>

    )
};

export default Write;