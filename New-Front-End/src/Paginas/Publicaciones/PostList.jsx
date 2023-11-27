import React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import AlertDialogSlide from '../../Componentes/AlertDialogSlide';

const apiUrl = 'http://localhost:4000/imagenes/publicaciones';

const PostList = ({ posts }) => {
  return (
        <Grid container spacing={2}>
          {posts.map((posts,index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }} key={posts.id}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={`${apiUrl}/${posts.images[0]}`}
                  title = {posts.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {posts.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {posts.condition}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Editar</Button>
                  <AlertDialogSlide/>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
  );
};

export default PostList;