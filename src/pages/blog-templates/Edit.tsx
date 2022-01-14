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

const Edit = () => {

    const { blog, handleChange, handleSubmit } = useBlog({ title: "", description: "", body: "", topic: "" })
    const { title, description, body, topic } = blog;

    return (

        <ThemeProvider theme={theme}>
            <CssBaseLine />

            <Container>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
                    <Grid container justifyContent="flex-end" sx={{ mb: 5 }} >
                        <Grid item sx={{ margin: '0px' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ my: 2, mx: 0 }}
                            >
                                Save Changes
                            </Button>
                        </Grid>
                        <Grid item sx={{ ml: '10px' }}>
                            <Button
                                variant="outlined"
                                sx={{ my: 2, mx: 0 }}
                            >
                                Remove Blog
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={10}>
                        <Grid item xs={12} >
                            <TextField
                                variant="standard"
                                name="title"
                                id="title"
                                // label="Title"
                                placeholder="Give your blog a title..."
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
                                // label="Description"
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
                                // label="Body"
                                placeholder="Tell your story..."
                                multiline
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
                                // label="Topic"
                                name="topic"
                                placeholder="Topic, in a single word..."
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
                </Box>
            </Container>

        </ThemeProvider >

    )
};

export default Edit;