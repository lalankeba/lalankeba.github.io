import './App.css';
import { Navbar } from './components/Navbar';
import { teal, blueGrey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { BottomBar } from './components/BottomBar';
import { Project } from './pages/Project';

const theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: teal
  },
  typography: {
    fontFamily: 'Quicksand'
  }
});

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className='app'>
            <header>
              <Navbar />
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
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
