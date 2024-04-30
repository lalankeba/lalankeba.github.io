import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const Project = ({projects}) => {

  const {id} = useParams();

  const project = projects.filter((pr) => pr.id == id)[0];
  const error = project === undefined || project === null;

  return (
    <Box component="section" py={2} my={4}>
      <Container maxWidth="lg">
        { error && 
        <Typography variant="h5">Cannot find any project for id: <em>{id}</em></Typography> 
        }
        { project && 
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src={`/projects/${project.image}`} alt={project.title} 
                style={{width: '100%', borderRadius: 8, display: 'block', margin: 'auto'}} />
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <Typography variant="h2" gutterBottom>{ project.title }</Typography>
            { project.descriptions.map((description) => (
              <Typography key={description} variant="body1" textAlign="justify" gutterBottom>{ description }</Typography>
            )) }
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
