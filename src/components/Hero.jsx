import { Box, Container, Typography } from "@mui/material"

export const Hero = () => {
  return (
    <Box py={15} px={2} display="flex"
      alignItems="center" 
      flexDirection={"column"}
        gap={4} sx={{ 
            backgroundImage: 'url(/hero-back-1.jpg)',
            backgroundSize: 'cover'
        }} >
            <Container maxWidth="lg" display="flex" alignItems="center">
              <Typography variant="h5">Hi, my name is</Typography>
              <Typography variant="h1" sx={{ fontWeight: 'bold', color: 'white' }}>Lalanke Athauda</Typography>
              <Typography variant="body1" gutterBottom>Experienced in crafting robust backend systems, with a knack for occasional frontend development, I bring versatility and depth to every project.</Typography>
            </Container>
      </Box>
  )
}
