import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Typography } from "@mui/material";
import { useState } from "react";

export const BottomBar = () => {

  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  }

  const closeDialog = () => {
    setOpen(false);
  }
  
  return (
    <Box py={0} my={0}>
      <Divider />
      <Container maxWidth="lg">
        <Box display="flex" flexWrap="wrap" alignItems="center" py={4} justifyContent="space-between" >
          <Typography sx={{ pl: 1 }}>Designed & Built by Lalanke Athauda</Typography>
          <Button onClick={openDialog} color="warning">Acknowledgements</Button>
          <Dialog open={open} onClose={closeDialog} aria-labelledby="dialog-title" aria-describedby="dialog-description">
            <DialogTitle id="dialog-title">
              Acknowledgements
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="dialog-description">
                <Typography variant="body1" gutterBottom textAlign={"justify"}>I would like to express my deepest gratitude to everyone who has supported me on my journey. A special thanks to my mentors, <em>Lakshitha Nalindanath</em>, <em>Towfiqul Alom</em> and <em>Safiul Alam</em>, for their invaluable guidance and encouragement. Their insights have greatly shaped my work and career.</Typography>
                <Typography variant="body1" textAlign={"justify"}>Finally, I would like to thank my family for their unwavering support and encouragement. Without them, none of this would be possible.</Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDialog}>Close</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Container>
    </Box>
  )
}
