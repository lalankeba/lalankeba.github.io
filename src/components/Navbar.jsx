import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, styled } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;
const pages = ['About', 'Skills', 'Projects', 'Articles', 'Contact'];

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Navbar = ({ window, toggleTheme }) => {
    const theme = useTheme();
    const [isLight, setIsLight] = useState(true);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ }}>
        <Typography variant="h6" sx={{ my: 2, mx: 2, textAlign: 'left' }}>
          Lalanke
        </Typography>
        <Divider />
        <List>
          {pages.map((page) => (
            <ListItem key={page} disablePadding>
              <ListItemButton sx={{ textAlign: 'left' }} component="a" href={`/#${page}`}>
                <ListItemText primary={page} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    useEffect(() => {
      theme.palette.mode === 'light' ? setIsLight(true) : setIsLight(false);
    }, [theme.palette.mode]);

    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <>
      <AppBar position="fixed" component="nav">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
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
                <Button key={page}
                  href={`/#${page}`}
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
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Offset />
      </>
    );
}
