import './App.css';
import { Navbar } from './components/Navbar';
import { brown, cyan, teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { BottomBar } from './components/BottomBar';

const theme = createTheme({
  palette: {
    primary: brown,
    secondary: cyan
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
                <Route path='projects/:id' element={ <Home /> }></Route>
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
