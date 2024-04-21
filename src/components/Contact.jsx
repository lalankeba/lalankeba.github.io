import { Box, Container, Link, Paper, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { MediumIcon } from "../icons/MediumIcon";
import { useTheme } from "@emotion/react";

export const Contact = () => {
  const theme = useTheme();

  const email = "lalankeba" + String.fromCharCode(64) + "gmail.com";


  return (
    <Box component="section" py={2} my={10}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>Contact Me</Typography>
        <Box display="flex" flexWrap="wrap" alignItems="center" mt={1} gap={6} >
          <Paper elevation={12} sx={{ py: 1, px: 2}}>
            <Link href={`mailto:${email}`} rel="noreferrer">
              <Box display="inline-flex" alignItems="center" sx={{ mt: 0.5 }}>
                <EmailIcon sx={{ marginRight: 1 }} /> {email}
              </Box>
            </Link>
          </Paper>
          <Paper elevation={12} sx={{ py: 1, px: 2}}>
            <Link href="https://github.com/lalankeba" target="_blank" rel="noreferrer">
              <Box display="inline-flex" alignItems="center" sx={{ mt: 0.5 }}>
                <GitHubIcon sx={{ marginRight: 1 }} /> Github
              </Box>
            </Link>
          </Paper>
          <Paper elevation={12} sx={{ py: 1, px: 2}}>
            <Link href="https://www.linkedin.com/in/lalankeathauda/" target="_blank" rel="noreferrer">
              <Box display="inline-flex" alignItems="center" sx={{ mt: 0.5 }}>
                <LinkedInIcon sx={{ marginRight: 1 }} /> LinkedIn
              </Box>
            </Link>
          </Paper>
          <Paper elevation={12} sx={{ py: 1, px: 2}}>
            <Link href="https://medium.com/@lalankeba" target="_blank" rel="noreferrer">
              <Box display="inline-flex" alignItems="center" sx={{ mt: 0.5 }}>
                <MediumIcon sx={{ marginRight: '8px' }} color={theme.palette.primary.main} /> Medium
              </Box>
            </Link>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}
