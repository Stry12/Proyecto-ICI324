import { Box, Button, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../../../Componentes/Navbar';
import '../../../../App.css'

const apiUrl = 'http://localhost:4000';

const InformacionLibros = () => {
  const { id } = useParams();

  const [bookInfo, setBookInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const response = await fetch(`${apiUrl}/libros/get/nosql/${id}`);
        const data = await response.json();

        if (response.ok && data.libro && data.libro.length > 0) {
          setBookInfo(data.libro[0]);
        } else {
          setError(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        setError(`Error al obtener el libro: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPublicaciones();
  }, [id]);

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: '20px' }}>
        <Card sx={{ display: 'flex', maxWidth: '800px', maxHeight: '500px' }}>
          <CardMedia
            component="img"
            sx={{ width: 200, height: 300, objectFit: 'cover' }}
            image={`${apiUrl}/imagenes/portadas/${bookInfo.coverImage}`}
            alt={bookInfo.title || "Titulo"}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {bookInfo.title || "Titulo"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Autor: {bookInfo.author || "Autor"}
              </Typography>
              <Chip label={bookInfo.category || "Categoría"} />
            </CardContent>
            <CardContent>
              <Typography variant="body2">
                {bookInfo.synopsis || "Sinopsis"}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default InformacionLibros;
