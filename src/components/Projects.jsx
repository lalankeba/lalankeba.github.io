import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AnchorSpacer } from "./AnchorSpacer";

export const Projects = ({projects}) => {

  return (
    <>
    <AnchorSpacer id="Projects" />
    <Box component="section" py={2} my={10}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>Recent Projects</Typography>
        <Grid container spacing={4} mt={1}>
          { projects.map((project, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
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
