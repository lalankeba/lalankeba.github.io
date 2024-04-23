import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const Project = () => {

  const {id} = useParams();

  const projects = [
    { 
      id: 1, 
      title: "ATM Switch", 
      image: "atm-switch.png",
      shortDesc: "ATM Switch developed using ISO 8583 messaging protocol",
      description: "The ATM Switch project involves the design, development, documentation, and maintenance of a key banking infrastructure component supporting three national banks in Sri Lanka and two overseas financial institutions in Zambia and Pakistan. Acting as a server, the ATM Switch listens to incoming ISO 8583 messages via a TCP/IP tunnel, converts them into JSON format, and then routes them to Core bank REST APIs. This switch plays a crucial role in streamlining ATM transactions and ensuring seamless communication between banking systems across different regions.",
      tools: ["Java", "Spring Boot", "J8584", "jPOS", "AsciiDoc", "Liquibase", "Hibernate", "REST APIs", "MySQL", "Oracle DB", "LaTex", "Git", "Maven", "SSH", "JBoss"],
      gitUrl: null,
      liveUrl: null
    }, { 
      id: 2, 
      title: "IBTH", 
      image: "ibth.png",
      shortDesc: "Inter bank transaction switch using ISO 8583 messages",
      description: "Leading the Inter Bank Transaction Hub (IBTH) involves overseeing the complete lifecycle of a critical banking project. This includes the design, development, documentation, testing, and ongoing maintenance of the system. IBTH is responsible for switching and routing ISO 8583 messages to REST services, enabling seamless inter-bank transactions. It collaborates with Sri Lanka's National Payment Network (CEFTS), ensuring efficient and secure payment processing across the country's banking ecosystem.",
      tools: ["Java", "Spring Boot", "J8584", "AsciiDoc", "Liquibase", "Hibernate", "REST APIs", "Oracle DB", "LaTex", "Git", "Maven", "SSH", "JBoss"],
      gitUrl: null,
      liveUrl: null
    }, { 
      id: 3, 
      title: "Sports Data Analyzer", 
      image: "sportsda.png",
      shortDesc: "Web based system to collect and analyze sports data",
      description: "A backend service that collects, saves, and analyzes sports data from university students provides a vital tool for enhancing athletic programs. It gathers both academic and sports data from students, storing it securely while offering robust analytics. These insights help coaches and sports administrators customize training plans, track progress, and identify risks, ultimately improving both performance and safety in university sports.",
      tools: ["Java", "Spring Boot", "Mapstruct", "Spring Rest Docs", "AsciiDoc", "Liquibase", "Hibernate", "JUnit", "Mockito", "WireMock", "Sonarqube", "Jacoco", "REST APIs", "MySQL", "PostgreSQL", "LaTex", "Git", "Maven"],
      gitUrl: null,
      liveUrl: null
    }, { 
      id: 4, 
      title: "Memory Game", 
      image: "js-memory-game.png",
      shortDesc: "Simple memory game made with basic web technologies",
      description: "A simple memory game built with basic web technologies HTML, JavaScript, and CSS offers a fun and interactive way to test players' memory skills. The game consists of a grid of cards that flip to reveal matching pairs. It allows players to change the number of cards letting users adjust the game's difficulty.  JavaScript handles the game logic, ensuring smooth gameplay, while CSS provides the visual styling and animations.",
      tools: ["HTML", "CSS", "Javascript", "VS Code"],
      gitUrl: null,
      liveUrl: null
    }, { 
      id: 5, 
      title: "Weather Dashboard", 
      image: "weather-dashboard.png",
      shortDesc: "Weather app for any location using openweathermap.org",
      description: "A weather dashboard that uses the OpenWeatherMap API provides real-time weather information and forecasts for a given location. It initially detects the user's current location to offer precise weather data like temperature, humidity, wind speed, and forecasted conditions. The dashboard's interface is designed to be user-friendly, allowing quick access to weather updates. This seamless integration with the OpenWeatherMap API ensures that users receive accurate and up-to-date weather details",
      tools: ["HTML", "CSS", "Javascript", "VS Code", "netlify"],
      gitUrl: "https://github.com/lalankeba/weather-dashboard",
      liveUrl: "https://weather-dashboard-lalanke.netlify.app/"
    }, { 
      id: 6, 
      title: "Culinary Voyage", 
      image: "culinary-voyage.jpg",
      shortDesc: "Shows how to make meals and cocktails using mealsdb and cokctailsdb",
      description: "An application that shows detailed information about meals and cocktails, including preparation steps and ingredient lists, draws data from the MealDB and CocktailDB APIs. This platform provides a comprehensive guide to cooking and mixology, with each dish or drink accompanied by easy-to-follow recipes and complete ingredient breakdowns. Users can explore a variety of meals and cocktails, making it a versatile tool for home chefs and amateur bartenders.",
      tools: ["React JS", "HTML", "CSS", "Javascript", "VS Code", "Vercel"],
      gitUrl: "https://github.com/lalankeba/culinary-voyage",
      liveUrl: "https://culinary-voyage.vercel.app/"
    }
  ];

  const project = projects.filter((pr) => pr.id == id)[0];
  const error = project === undefined || project === null;

  return (
    <Box component="section" py={2} my={4}>
      <Container maxWidth="lg">
        { error && <div>Cannot find any project for id: {id}</div> }
        { project && 
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src={`/projects/${project.image}`} alt={project.title} 
                style={{width: '100%', borderRadius: 8, display: 'block', margin: 'auto'}} />
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <Typography variant="h2" gutterBottom>{ project.title }</Typography>
            <Typography variant="body1" textAlign="justify">{ project.description }</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>Tools and Techs</Typography>
            <Box gap={2}>
            { project.tools.map((tool) => (
              <Chip key={tool} label={tool} color="primary" variant="outlined" 
              size="small" sx={{ m: 1, p: 1 }} />
            ))}
            </Box>
          </Grid>
          <Grid item xs={12} mt={4}>
            <Box gap={2} display="flex" flexWrap={"wrap"} alignItems={"center"} justifyContent={"center"}>
            { project.gitUrl && 
              <Button variant="contained" color="warning" size="medium" href={`${project.gitUrl}`} 
              target="_blank" rel="noreferrer" startIcon={<GitHubIcon />} endIcon={<ArrowOutwardIcon />}>Git Repo</Button>
            }
            { project.liveUrl && 
              <Button variant="contained" color="success" size="medium" href={`${project.liveUrl}`} 
              target="_blank" rel="noreferrer" startIcon={<DashboardIcon />} endIcon={<ArrowOutwardIcon />}>Live Demo</Button>
            }
            </Box>
          </Grid>
        </Grid>
        }
      </Container>
    </Box>
  )
}
