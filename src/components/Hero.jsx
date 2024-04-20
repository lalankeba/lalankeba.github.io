import { Box, Container, Typography } from "@mui/material"

export const Hero = () => {
  return (
    <Box component="section" py={15} px={2} gap={4} sx={{ 
            backgroundImage: 'url(/hero-back-1.jpg)',
            backgroundSize: 'cover'
        }} >
            <Container maxWidth="lg">
              <Box display="flex" alignItems="center" flexDirection={"column"}>
                <Typography variant="h5">Hi, my name is</Typography>
                <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', color: 'white' }} align="center">Lalanke Athauda</Typography>
                <Typography variant="body1" gutterBottom align="center">Experienced in crafting robust backend systems, with a knack for occasional frontend development, I bring versatility and depth to every project.</Typography>
              </Box>
            </Container>
      </Box>
  )
}
