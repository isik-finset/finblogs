import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material'
import Page from 'src/components/Page';
import axiosInstance from 'src/utils/axios';
import Blogs from './blog-templates/Blogs'
import ImageFeature from './blog-templates/ImageFeature';
import { imageFeaturePost } from './blog-templates/ImageFeaturePost';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Footer from './blog-templates/Footer';




interface LandingPageType {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  topic: string
  readTime: string;
};


export default function LandingPage() {

  const [list, setList] = useState<LandingPageType[]>([])

  const theme = createTheme();

  const testProps = [{
    title: 'Most Americans Have No Clue What Immunocompromised Means',
    description: 'Let’s understand who the immunocompromised are. And this is a very lazy description for the blog',
    topic: 'React',
    firstName: 'Mark',
    lastName: 'Cuban',
    createdAt: 'January 13, 2022',
    readTime: '6'
  },
  {
    title: 'Most Americans Have No Clue What Immunocompromised Means',
    description: 'Let’s understand who the immunocompromised are. And this is a very lazy description for the blog',
    topic: 'Vue',
    firstName: 'Josh',
    lastName: 'Cuban',
    createdAt: 'January 13, 2022',
    readTime: '6'
  },
  {
    title: 'Most Americans Have No Clue What Immunocompromised Means',
    description: 'Let’s understand who the immunocompromised are. And this is a very lazy description for the blog',
    topic: 'Angular',
    firstName: 'Ken',
    lastName: 'Cuban',
    createdAt: 'January 13, 2022',
    readTime: '6'
  }
  ]


  // useEffect(() => {
  //     axiosInstance
  //     .get('/api/account/posts')
  //     .then(({ data }) => {
  //         console.log(data);
  //         setList(data.items);
  //     })
  //     .catch((e) => {
  //         console.error(e);
  //     });
  // }, [])

  return (
    <Page title="Single Post Page">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', height: '100vh', marginBottom: '50px' }}>


          <Box>
            <ImageFeature post={imageFeaturePost} />
            {testProps.map((item, i, arr) => (
              <Blogs key={i} props={item} />
            )
            )}
          </Box>


        </Container>
        <Footer />
      </ThemeProvider>
    </Page>

  )
};



