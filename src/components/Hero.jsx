import { Box, Container, Typography } from "@mui/material"

export const Hero = () => {
  return (
    <Box component="section" px={2} gap={4} sx={{ 
      backgroundColor: '#486470',
      backgroundImage: `linear-gradient(to bottom, transparent 70%, #ffffff), url('/hero-back-0.jpg')`,
      backgroundSize: 'cover',
      height: '92dvh',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
        }} >
            <Container maxWidth="lg">
              <Box display="flex" alignItems="center" flexDirection={"column"} sx={{ 
                p: 4,
                borderRadius: 2,                
                backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))'
              }}>
                <Typography variant="h5" sx={{ color: 'white' }}>Hi, my name is</Typography>
                <Typography variant="h2" component="h1" sx={{ fontWeight: '900', color: 'white' }} align="center">Lalanke Athauda</Typography>
                <Typography variant="h6" gutterBottom align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Experienced in crafting robust backend systems, with a knack for occasional frontend development, I bring versatility and depth to every project.</Typography>
              </Box>
            </Container>
      </Box>
  )
}
