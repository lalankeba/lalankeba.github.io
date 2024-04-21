import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const Articles = () => {
  const articles = [
    { 
      id: 1, 
      title: 'Create and Read Simple ISO8583 Messages using J8583', 
      image: 'intro-to-j8583.png',
      url: 'https://medium.com/@lalankeba/create-and-read-simple-iso-8583-message-using-j8583-673817cfac9a' 
    }, { 
      id: 2, 
      title: 'Introduction to ISO 8583 Messages', 
      image: 'intro-to-iso8583.png',
      url: 'https://medium.com/@lalankeba/introduction-to-iso-8583-messages-3dd732437ad7' 
    }, { 
      id: 3, 
      title: 'Create Simple ISO 8583 Messages using jPOS', 
      image: 'intro-to-jpos.png',
      url: 'https://medium.com/@lalankeba/create-simple-iso-8583-messages-using-jpos-fe5b47ea4d28' 
    }, { 
      id: 4, 
      title: 'Business Process Modeling with Goal Modeling', 
      image: 'icma-2015.png',
      url: 'https://graduate.sjp.ac.lk/icma/past-conferences/icma-2015/' 
    }
  ];

  return (
    <Box component="section" py={2} my={10}>
      <Container maxWidth="lg" >
        <Typography variant="h2" gutterBottom>Articles</Typography>
        <Grid container spacing={4} mt={1}>
          { articles.map((article) => (
            <Grid key={article.id} item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia sx={{ height: 140 }} image={`/articles/${article.image}`} />
                <CardContent sx={{ minHeight: 62 }}>
                  <Typography variant="h6">{article.title}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={`${article.url}`} target="_blank" rel="noreferrer" endIcon={<ArrowOutwardIcon />}>Read</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
