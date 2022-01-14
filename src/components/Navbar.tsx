import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';
import DrawerBar from './Drawer';
// import Link from "src/theme/overrides/Link";
import useAuth from 'src/hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const StyledNavLink = styled("div")(({ theme }) => ({
    // marginLeft: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginRight: theme.spacing(10),
    paddingTop: "1px",


    "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
    },
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
    // flexGrow: "0.5",
    cursor: "pointer"
}))

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { isAuth, logOut } = useAuth();
    const navigate = useNavigate();

    return (
        <AppBar position='static' sx={{ alignItems: "left", width: '100%' }}>
            <CssBaseline />
            <Toolbar>
                {isMobile ? <DrawerBar /> : (
                    <StyledNavLink sx={{ width: '100%' }}>
                        <Grid container sx={{ alignItems: 'center' }}>
                            <Grid item sm={2}>
                                <StyledTypography onClick={() => navigate("/landing")} itemType="button" variant="h4">
                                    BetterBlog
                                </StyledTypography>
                            </Grid>
                            <Grid item sm={8} sx={{ display: "flex", justifyContent: 'center', alignItems: 'left' }} >
                                <StyledLink to='/landing'>
                                    Home
                                </StyledLink>


                                <StyledLink to='/write-post'>
                                    Write
                                </StyledLink>


                                <StyledLink to='/my-posts'>
                                    Myposts
                                </StyledLink>

                                {!isAuth ? (
                                    <>
                                        <StyledLink to='/login'>
                                            Login
                                        </StyledLink>


                                        <StyledLink to='/register'>
                                            Register
                                        </StyledLink>
                                    </>
                                ) : (
                                    <StyledLink onClick={() => logOut()} to='/landing'>
                                        Logout
                                    </StyledLink>
                                )}

                            </Grid>
                        </Grid>
                    </StyledNavLink>
                )
                }

            </Toolbar>
        </AppBar>
    )
}

export default Navbar



// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             width: '12ch',
//             '&:focus': {
//                 width: '20ch',
//             },
//         },
//     },
// }));

// export default function SearchAppBar() {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="open drawer"
//                         sx={{ mr: 2 }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="div"
//                         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//                     >
//                         MUI
//                     </Typography>
//                     <Search>
//                         <SearchIconWrapper>
//                             <SearchIcon />
//                         </SearchIconWrapper>
//                         <StyledInputBase
//                             placeholder="Search…"
//                             inputProps={{ 'aria-label': 'search' }}
//                         />
//                     </Search>
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// }