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

    const { blog, handleChange, handleSubmit } = useBlog({ title: "", description: "", body: "" })
    const { title, description, body } = blog;

    return (

        <ThemeProvider theme={theme}>
            <CssBaseLine />

            <Container>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="standard"
                                autoComplete="given-name"
                                name="title"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                autoFocus
                                value={title}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant='standard'
                                multiline
                                required
                                fullWidth
                                id="description"
                                label="Description"
                                name="description"
                                autoComplete="Description"
                                value={description}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                multiline
                                variant="standard"
                                required
                                fullWidth
                                id="body"
                                label="Body"
                                name="body"
                                autoComplete="Tell your story..."
                                value={body}
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