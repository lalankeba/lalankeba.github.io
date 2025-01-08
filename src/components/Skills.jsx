import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import { AnchorSpacer } from "./AnchorSpacer";

export const Skills = () => {

  const frontendSkills = [
    {id: 1, label: 'React'},
    {id: 2, label: 'Next.js'},
    {id: 3, label: 'HTML'},
    {id: 4, label: 'CSS'},
    {id: 5, label: 'Javascript'},
    {id: 6, label: 'Material UI'},
    {id: 7, label: 'Bootstrap'},
    {id: 8, label: 'D3'},
    {id: 9, label: 'JSP'},
  ];

  const backendSkills = [
    {id: 1, label: 'Java'},
    {id: 2, label: 'Spring'},
    {id: 3, label: 'Springboot'},
    {id: 4, label: 'Hibernate'},
    {id: 5, label: 'Liquibase'},
    {id: 6, label: 'Node.js'},
    {id: 7, label: 'Express'},
  ];

  const databaseSkills = [
    {id: 1, label: 'MySQL'},
    {id: 2, label: 'PostgreSQL'},
    {id: 3, label: 'Oracle'},
    {id: 4, label: 'MariaDB'},
    {id: 5, label: 'MongoDB'},
  ];

  return (
    <>
    <AnchorSpacer id="Skills" />
    <Box component="section" py={2} my={10}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>My Skills</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" gutterBottom>Frontend</Typography>
            <Box gap={2}>
              { frontendSkills.map((skill) => (
                <Chip key={skill.id} label={skill.label} color="primary" variant="filled" 
                size="medium" sx={{ m: 1, p: 3 }} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" gutterBottom>Backend</Typography>
            <Box gap={2}>
            { backendSkills.map((skill) => (
              <Chip key={skill.id} label={skill.label} color="warning" variant="filled"
               size="medium" sx={{ m: 1, p: 3 }} />
            ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" gutterBottom>Databases</Typography>
            <Box gap={2}>
            { databaseSkills.map((skill) => (
              <Chip key={skill.id} label={skill.label} color="secondary" variant="filled"
               size="medium" sx={{ m: 1, p: 3 }} />
            ))}
            </Box>
          </Grid>
        </Grid>
        
      </Container>
    </Box>
    </>
  );
}
