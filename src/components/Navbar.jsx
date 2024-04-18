import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const pages = ['About', 'Experience', 'Projects', 'Articles', 'Contact'];

export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    return (
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="a" href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', sm: 'flex' },
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 0
              }}
            >
                Lalanke Athauda
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar"
                aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu id="menu-appbar" anchorEl={anchorElNav} 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left',
                }} 
                keepMounted 
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', sm: 'none' }, }} >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', sm: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Lalanke
            </Typography>
            <Box sx={{ flexGrow: 0, marginLeft: 'auto', display: { xs: 'none', sm: 'flex' } }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu}
                  href={ "/home#" + page}
                  sx={{ my: 2, color: 'white', display: 'block' }} >
                  {page}
                </Button>
              ))}
            </Box>
  
          </Toolbar>
        </Container>
      </AppBar>
    );
}
