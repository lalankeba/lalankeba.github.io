import { Box, Container, Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
    <Box component="section" py={2} my={10}>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" flexDirection={"column"}>
          <Typography variant="h1" gutterBottom sx={{
            fontWeight: 'bold',
            fontSize: '6rem',
            backgroundColor: '#607D8B',
            backgroundImage: `url('/hero-back-0.jpg')`,
            backgroundSize: 'cover',
            backgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
          }}>Not Found</Typography>
          <Typography variant="h3" gutterBottom>404</Typography>
          <Typography variant="body1" sx={{ textAlign: 'justify' }}>Oops! The page you&apos;re looking for doesn&apos;t seem to exist. Try going back to our <Link component={RouterLink} to="/" underline="hover">homepage</Link> or checking the URL.</Typography>
        </Box>
      </Container>
    </Box>
    </>
  )
}
