import './App.css';
import { Navbar } from './components/Navbar';
import { teal, blueGrey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { BottomBar } from './components/BottomBar';
import { Project } from './pages/Project';
import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: blueGrey,
    secondary: teal
  },
  typography: {
    fontFamily: 'Quicksand'
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontFamily: 'Quicksand'
  }
});

function App() {

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box className='app'>
            <header>
              <Navbar toggleTheme={toggleTheme} />
            </header>
            <main>
              <Routes>
                <Route index element={ <Home /> }></Route>
                <Route path='home' element={ <Home /> }></Route>
                <Route path='projects/:id' element={ <Project /> }></Route>
                <Route path='*' element={ <NotFound /> }></Route>
              </Routes>
            </main>
            <footer>
              <BottomBar />
            </footer>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
