import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar=()=>{
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <ScrollLink  to="home" spy={true} smooth={true} offset= {-90} duration={1000} style={{textDecoration:"none",color:'white'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Portfolio
          </Typography>
          </ScrollLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem  onClick={handleCloseNavMenu}>
                  <ScrollLink style={{textDecoration:'none'}} to="home" spy={true} smooth={true} offset= {-90} duration={1000} >
                    <Typography textAlign="center">Home</Typography>
                  </ScrollLink>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <ScrollLink style={{textDecoration:'none'}} to="about" spy={true} smooth={true} offset= {-90} duration={1000} >
                    <Typography textAlign="center">About Me</Typography>
                  </ScrollLink>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <ScrollLink style={{textDecoration:'none'}} to="projects" spy={true} smooth={true} offset= {-90} duration={1000} >
                    <Typography textAlign="center">Projects</Typography>
                  </ScrollLink>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <ScrollLink style={{textDecoration:'none'}} to="contact" spy={true} smooth={true} offset= {-90} duration={1000} >
                    <Typography textAlign="center">contact</Typography>
                  </ScrollLink>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <ScrollLink style={{textDecoration:'none'}} to="testimonials" spy={true} smooth={true} offset= {-90} duration={1000} >
                    <Typography textAlign="center">Testimonials</Typography>
                  </ScrollLink>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <ScrollLink style={{textDecoration:'none'}} to="certificates" spy={true} smooth={true} offset= {-90} duration={1000} >
                    <Typography textAlign="center">Certificates & Awards</Typography>
                  </ScrollLink>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <RouterLink style={{textDecoration:'none',color:'black'}} to="/blog" spy={true} smooth={true} offset= {-90} duration={1000} >
                    <Typography textAlign="center">Blog</Typography>
                  </RouterLink>
                </MenuItem>

             
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <ScrollLink style={{textDecoration:'none'}} to="home" spy={true} smooth={true} offset= {-90} duration={1000} >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Home
                </Button>
              </ScrollLink>

              <ScrollLink style={{textDecoration:'none'}} to="about" spy={true} smooth={true} offset= {-90} duration={1000}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  About Me
                </Button>
              </ScrollLink>

              <ScrollLink style={{textDecoration:'none'}} to="projects" spy={true} smooth={true} offset= {-90} duration={1000}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Projects
                </Button>
              </ScrollLink>
              <ScrollLink style={{textDecoration:'none'}} to="contact" spy={true} smooth={true} offset= {-90} duration={1000}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Contact
                </Button>
              </ScrollLink>
              {/* <ScrollLink style={{textDecoration:'none'}} to="testimonials" spy={true} smooth={true} offset= {-90} duration={1000}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Testimonials
                </Button>
              </ScrollLink>
              <ScrollLink style={{textDecoration:'none'}} to="certificates" spy={true} smooth={true} offset= {-90} duration={1000}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Certificates & Awards
                </Button>
              </ScrollLink> */}
              <RouterLink style={{textDecoration:'none'}} to="/blog">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Blog
                </Button>
              </RouterLink>
    
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
