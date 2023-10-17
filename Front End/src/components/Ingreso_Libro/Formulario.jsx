import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';

function Formulario() {
  const [bookInfo, setBookInfo] = useState({
    isbn: '',
    title: '',
    author: '',
    synopsis: '',
    coverImage: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookInfo({ ...bookInfo, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setBookInfo({ ...bookInfo, coverImage: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del libro al servidor o realizar alguna acción con ellos.
    if(!bookInfo.isbn || !bookInfo.title || !bookInfo.author || !bookInfo.synopsis || !bookInfo.coverImage) {
        alert("Por favor, completa todos los campos");
        return;
    }
    
    console.log(bookInfo);

  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" component="h2">
          Ingresar un nuevo libro
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="ISBN"
            name="isbn"
            value={bookInfo.isbn}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Título"
            name="title"
            value={bookInfo.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Autor"
            name="author"
            value={bookInfo.author}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sinopsis"
            name="synopsis"
            value={bookInfo.synopsis}
            onChange={handleChange}
            fullWidth
            multiline
            margin="normal"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Enviar
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Formulario;
