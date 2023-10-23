import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';

const apiUrl = 'http://localhost:4000';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  maxWidth: 600,
  margin: '0 auto',
  backgroundColor: '#f3f3f3',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const StyledMedia = styled(CardMedia)(({ theme }) => ({
  width: 200,
  height: 300,
  objectFit: 'cover',
  borderRadius: theme.breakpoints.down('sm') ? '10px 10px 0 0' : '10px 0 0 10px',
}));

const StyledCardContent = styled(CardContent)({
  flex: '1 0 auto',
  padding: '16px',
});

const StyledTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

const StyledAuthor = styled(Typography)({
  fontSize: '1rem',
  color: (theme) => theme.palette.primary.main,
  marginTop: '8px',
});

const StyledISBN = styled(Typography)({
  fontSize: '1rem',
  color: (theme) => theme.palette.primary.main,
  marginTop: '8px',
});

const StyledSinopsis = styled(Typography)({
  fontSize: '1rem',
  marginTop: '16px',
});

const InformacionLibro = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const theme = useTheme();
  
    useEffect(() => {
      // Construye la URL para la solicitud utilizando el valor de `id`
      const apiUrlBook = `${apiUrl}/libros/getlibrosID/${id}`;
      
      // Realiza la solicitud HTTP para obtener detalles del libro
      fetch(apiUrlBook)
        .then((response) => {
          if (!response.ok) {
            throw Error('Error en la solicitud');
          }
          return response.json();
        })
        .then((jsonData) => {
          // Al recibir los detalles del libro, actualiza el estado del componente
          setBook(jsonData.libros[0] || {}); // Usar el primer elemento o un objeto vacío si no hay datos
        })
        .catch((error) => console.error('Error al obtener datos de la API:', error));
    }, [id]);
  
    return (
      <StyledCard>
        <StyledMedia component="img" image={`${apiUrl}/imagenes/portadas/${book.nombre_imagen}`} alt="Portada del libro" />
        <StyledCardContent>
          <StyledTitle>Título: {book.Titulo}</StyledTitle>
          <StyledAuthor>Autor: {book.Autor}</StyledAuthor>
          <StyledISBN>ISBN: {book.ISBN}</StyledISBN>
          <StyledSinopsis>Sinopsis: {book.Descripción}</StyledSinopsis>
        </StyledCardContent>
      </StyledCard>
    );
  };
  


export default InformacionLibro;
