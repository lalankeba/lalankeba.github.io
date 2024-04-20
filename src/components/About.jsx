import { Box, Container, Grid, Typography } from "@mui/material"
import aboutImage from '../assets/lalanke.jpg';

export const About = () => {
  return (
    <Box component="section" py={2} my={10}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
            <img src={aboutImage} alt="Lalanke Athauda" 
              style={{width: '100%', maxWidth: 360, borderRadius: '50%', display: 'block', margin: 'auto'}} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h2' gutterBottom textAlign="center">
              About Me
            </Typography>
            <Typography variant="body1" align="justify" gutterBottom>
              Hi there, I&apos;m Lalanke Athauda, and I find joy in crafting the behind-the-scenes magic of the internet. My fascination with software development ignited in 2008, when I delved into learning Java. Since then, I&apos;ve been fortunate to contribute to various organizations. Currently, my focus is on crafting compelling frontend experiences.
            </Typography>
            <Typography variant="body1" align="justify">
              With extensive experience under my belt, I bring a wealth of expertise as a seasoned software engineer. I specialize in Java development, particularly in crafting robust and scalable applications using the Spring and Spring Boot frameworks. Throughout my career, I&apos;ve maintained a strong dedication to writing clean and sustainable code, recognizing its pivotal role in software development.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
