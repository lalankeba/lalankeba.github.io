import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AnchorSpacer } from "./AnchorSpacer";

export const Projects = () => {

  const projects = [
    { 
      id: 1, 
      title: "ATM Switch", 
      image: "atm-switch.png",
      shortDesc: "ATM Switch developed using ISO 8583 messaging protocol"
    }, { 
      id: 2, 
      title: "IBTH", 
      image: "ibth.png",
      shortDesc: "Inter bank transaction switch using ISO 8583 messages"
    }, { 
      id: 3, 
      title: "Sports Data Analyzer", 
      image: "sportsda.png",
      shortDesc: "Web based system to collect and analyze sports data"
    }, { 
      id: 4, 
      title: "Memory Game", 
      image: "js-memory-game.png",
      shortDesc: "Simple memory game made with basic web technologies"
    }, { 
      id: 5, 
      title: "Weather Dashboard", 
      image: "weather-dashboard.png",
      shortDesc: "Weather app for any location using openweathermap.org"
    }, { 
      id: 6, 
      title: "Culinary Voyage", 
      image: "culinary-voyage.jpg",
      shortDesc: "Shows how to make meals and cocktails using mealsdb and cokctailsdb"
    }
  ];

  return (
    <>
    <AnchorSpacer id="Projects" />
    <Box component="section" py={2} my={10}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>Recent Projects</Typography>
        <Grid container spacing={4} mt={1}>
          { projects.map((project) => (
            <Grid key={project.id} item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea component={Link} to={`/projects/${project.id}`}>
                  <CardMedia sx={{ height: 160 }} image={`/projects/${project.image}`} title={`${project.title}`} />
                  <CardContent>
                    <Typography variant="h5" component="div">{project.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{project.shortDesc}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
    </>
  )
}
