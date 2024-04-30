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

const projects = [
  { 
    id: 1, 
    title: "ATM Switch", 
    image: "atm-switch.png",
    shortDesc: "ATM Switch developed using ISO 8583 messaging protocol",
    descriptions: ["The ATM Switch project involves the design, development, documentation, and maintenance of a key banking infrastructure component supporting three national banks in Sri Lanka and two overseas financial institutions in Zambia and Pakistan. Acting as a server, the ATM Switch listens to incoming ISO 8583 messages via a TCP/IP tunnel, converts them into JSON format, and then routes them to Core bank REST APIs. This switch plays a crucial role in streamlining ATM transactions and ensuring seamless communication between banking systems across different regions."],
    tools: ["Java", "Spring Boot", "J8583", "jPOS", "AsciiDoc", "Liquibase", "Hibernate", "REST APIs", "MySQL", "Oracle DB", "LaTex", "Git", "Maven", "SSH", "JBoss"],
    gitUrl: null,
    liveUrl: null
  }, { 
    id: 2, 
    title: "IBTH", 
    image: "ibth.png",
    shortDesc: "Inter bank transaction switch using ISO 8583 messages",
    descriptions: ["Leading the Inter Bank Transaction Hub (IBTH) involves overseeing the complete lifecycle of a critical banking project. This includes the design, development, documentation, testing, and ongoing maintenance of the system. IBTH is responsible for switching and routing ISO 8583 messages to REST services, enabling seamless inter-bank transactions. It collaborates with Sri Lanka's National Payment Network (CEFTS), ensuring efficient and secure payment processing across the country's banking ecosystem."],
    tools: ["Java", "Spring Boot", "J8583", "AsciiDoc", "Liquibase", "Hibernate", "REST APIs", "Oracle DB", "LaTex", "Git", "Maven", "SSH", "JBoss"],
    gitUrl: null,
    liveUrl: null
  }, { 
    id: 3, 
    title: "Sports Data Analyzer", 
    image: "sportsda.png",
    shortDesc: "Web based system to collect and analyze sports data",
    descriptions: ["A backend service that collects, saves, and analyzes sports data from university students provides a vital tool for enhancing athletic programs. It gathers both academic and sports data from students, storing it securely while offering robust analytics. These insights help coaches and sports administrators customize training plans, track progress, and identify risks, ultimately improving both performance and safety in university sports."],
    tools: ["Java", "Spring Boot", "Mapstruct", "Spring Rest Docs", "AsciiDoc", "Liquibase", "Hibernate", "JUnit", "Mockito", "WireMock", "Sonarqube", "Jacoco", "REST APIs", "MySQL", "PostgreSQL", "LaTex", "Git", "Maven"],
    gitUrl: null,
    liveUrl: null
  }, { 
    id: 4, 
    title: "Memory Game", 
    image: "js-memory-game.png",
    shortDesc: "Simple memory game made with basic web technologies",
    descriptions: ["A simple memory game built with basic web technologies HTML, JavaScript, and CSS offers a fun and interactive way to test players' memory skills. The game consists of a grid of cards that flip to reveal matching pairs. It allows players to change the number of cards letting users adjust the game's difficulty.  JavaScript handles the game logic, ensuring smooth gameplay, while CSS provides the visual styling and animations."],
    tools: ["HTML", "CSS", "Javascript", "VS Code"],
    gitUrl: null,
    liveUrl: null
  }, { 
    id: 5, 
    title: "Weather Dashboard", 
    image: "weather-dashboard.png",
    shortDesc: "Weather app for any location using openweathermap.org",
    descriptions: [
      "This application is done during the leisure time to improve the knowledge on basic web technologies. Live app is hosted in netlify.",
      "A weather dashboard that uses the OpenWeatherMap API provides real-time weather information and forecasts for a given location. It initially detects the user's current location to offer precise weather data like temperature, humidity, wind speed, and forecasted conditions. The dashboard's interface is designed to be user-friendly, allowing quick access to weather updates. This seamless integration with the OpenWeatherMap API ensures that users receive accurate and up-to-date weather details"
    ],
    tools: ["HTML", "CSS", "Javascript", "VS Code", "netlify"],
    gitUrl: "https://github.com/lalankeba/weather-dashboard",
    liveUrl: "https://weather-dashboard-lalanke.netlify.app/"
  }, { 
    id: 6, 
    title: "Culinary Voyage", 
    image: "culinary-voyage.jpg",
    shortDesc: "Shows how to make meals and cocktails using mealsdb and cokctailsdb",
    descriptions: [
      "This application is done during the leisure time to improve the knowledge on React. Live app is hosted in vercel.",
      "An application that shows detailed information about meals and cocktails, including preparation steps and ingredient lists, draws data from the MealDB and CocktailDB APIs. This platform provides a comprehensive guide to cooking and mixology, with each dish or drink accompanied by easy-to-follow recipes and complete ingredient breakdowns. Users can explore a variety of meals and cocktails, making it a versatile tool for home chefs and amateur bartenders."
    ],
    tools: ["React", "React Router", "HTML", "CSS", "Javascript", "VS Code", "Vercel"],
    gitUrl: "https://github.com/lalankeba/culinary-voyage",
    liveUrl: "https://culinary-voyage.vercel.app/"
  }
];

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
                <Route index element={ <Home projects={projects} /> }></Route>
                <Route path='home' element={ <Home projects={projects} /> }></Route>
                <Route path='projects/:id' element={ <Project projects={projects} /> }></Route>
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
