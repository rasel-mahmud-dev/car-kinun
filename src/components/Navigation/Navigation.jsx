import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {useContext, useState} from "react";
import AppContext from "../../store/AppContext";
import useStore from "../../hooks/useStore";
import {Link} from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navigation() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [{auth}] = useStore()


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" color={"transparent"} style={{ boxShadow: "none" }}>
            <Container maxWidth={"xl"}>
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    {/*<Car sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ width: 55 }}>
                            <img className="w-full" src="/car.png" />
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                ml: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                color: "light.500",
                                textDecoration: "none",
                            }}
                        >
                            Car Kinun
                        </Typography>
                    </Box>

                    {/*<Box sx={{ display: { xs: "flex", md: "none" } }}>*/}
                    {/*    <IconButton*/}
                    {/*        size="large"*/}
                    {/*        aria-label="account of current user"*/}
                    {/*        aria-controls="menu-appbar"*/}
                    {/*        aria-haspopup="true"*/}
                    {/*        onClick={handleOpenNavMenu}*/}
                    {/*        color="inherit"*/}
                    {/*    >*/}
                    {/*        <MenuIcon />*/}
                    {/*    </IconButton>*/}
                    {/*    <Menu*/}
                    {/*        id="menu-appbar"*/}
                    {/*        anchorEl={anchorElNav}*/}
                    {/*        anchorOrigin={{*/}
                    {/*            vertical: "bottom",*/}
                    {/*            horizontal: "left",*/}
                    {/*        }}*/}
                    {/*        keepMounted*/}
                    {/*        transformOrigin={{*/}
                    {/*            vertical: "top",*/}
                    {/*            horizontal: "left",*/}
                    {/*        }}*/}
                    {/*        open={Boolean(anchorElNav)}*/}
                    {/*        onClose={handleCloseNavMenu}*/}
                    {/*        sx={{*/}
                    {/*            display: { xs: "block", md: "none" },*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {pages.map((page) => (*/}
                    {/*            <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
                    {/*                <Typography textAlign="center">{page}</Typography>*/}
                    {/*            </MenuItem>*/}
                    {/*        ))}*/}

                    {/*        <Box sx={{ flexGrow: 1 }}>*/}
                    {/*            <Tooltip title="Open settings">*/}
                    {/*                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>*/}
                    {/*                    <Avatar*/}
                    {/*                        alt="Remy Sharp"*/}
                    {/*                        src="/static/images/avatar/2.jpg"*/}
                    {/*                    />*/}
                    {/*                </IconButton>*/}
                    {/*            </Tooltip>*/}
                    {/*            <Menu*/}
                    {/*                sx={{ mt: "45px" }}*/}
                    {/*                id="menu-appbar"*/}
                    {/*                anchorEl={anchorElUser}*/}
                    {/*                anchorOrigin={{*/}
                    {/*                    vertical: "top",*/}
                    {/*                    horizontal: "right",*/}
                    {/*                }}*/}
                    {/*                keepMounted*/}
                    {/*                transformOrigin={{*/}
                    {/*                    vertical: "top",*/}
                    {/*                    horizontal: "right",*/}
                    {/*                }}*/}
                    {/*                open={Boolean(anchorElUser)}*/}
                    {/*                onClose={handleCloseUserMenu}*/}
                    {/*            >*/}
                    {/*                {settings.map((setting) => (*/}
                    {/*                    <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                    {/*                        <Typography textAlign="center">{setting}</Typography>*/}
                    {/*                    </MenuItem>*/}
                    {/*                ))}*/}
                    {/*            </Menu>*/}
                    {/*        </Box>*/}
                    {/*    </Menu>*/}
                    {/*</Box>*/}

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "flex-end" }}>
                        {pages.map((page) => (
                            <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                                {page}
                            </Button>
                        ))}
                        { auth ? (
                            <Box>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: "45px" }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        ): (
                            <Box>
                                <Link to="/login" style={{textDecoration: "none"}}>
                                    <Button variant="outlined">Login</Button>
                                </Link>
                            </Box>

                        ) }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navigation;
