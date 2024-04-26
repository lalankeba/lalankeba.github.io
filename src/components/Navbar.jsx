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
import { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@mui/material/styles';

const pages = ['About', 'Skills', 'Projects', 'Articles', 'Contact'];

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Navbar = ({toggleTheme}) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const theme = useTheme();
    const [isLight, setIsLight] = useState(true);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    useEffect(() => {
      theme.palette.mode === 'light' ? setIsLight(true) : setIsLight(false);
    }, [theme.palette.mode]);
  
    return (
      <>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="a" href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', sm: 'flex' },
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 'bold',
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
                  <MenuItem key={page} onClick={handleCloseNavMenu} component="a" href={"/#" + page}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            <Typography variant="h5" noWrap component="a" href="/"
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
                  href={ "/#" + page}
                  sx={{ my: 2, color: 'white', display: 'block' }} >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, marginLeft: '1', display: { xs: 'flex' } }}>
              <IconButton onClick={toggleTheme} color="secondary" aria-label="change theme">
                { isLight && <DarkModeIcon /> }
                { !isLight && <LightModeIcon /> }
              </IconButton>
            </Box>
  
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
      </>
    );
}
