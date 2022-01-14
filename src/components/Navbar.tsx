import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid'
import { Link, useNavigate } from 'react-router-dom';
import DrawerBar from './Drawer';
// import Link from "src/theme/overrides/Link";
import useAuth from 'src/hooks/useAuth';



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

