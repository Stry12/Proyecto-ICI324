import React from 'react';
import { Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';

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

const InformacionLibro = ({ book }) => {
  const theme = useTheme();

  return (
    <StyledCard>
      <StyledMedia component="img" image={book.portada} alt="Portada del libro" />
      <StyledCardContent>
        <StyledTitle>Título: {book.titulo}</StyledTitle>
        <StyledAuthor>Autor: {book.autor}</StyledAuthor>
        <StyledISBN>ISBN: {book.isbn}</StyledISBN>
        <StyledSinopsis>Sinopsis: {book.sinopsis}</StyledSinopsis>
      </StyledCardContent>
    </StyledCard>
  );
};

export default InformacionLibro;

