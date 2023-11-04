import React, {useState} from 'react';
import NavBar from '../../../../Componentes/Navbar';
import { Button, TextField, Typography, Container, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import '../../../../App.css'

const apiUrl = 'http://localhost:4000';

const AgregarLibro = () => {
    const [bookInfo, setBookInfo] = useState({
        isbn: '',
        title: '',
        author: '',
        synopsis: '',
        coverImage: null,
        category: '', // Agregamos la categoría
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
    
        if (!bookInfo.isbn || !bookInfo.title || !bookInfo.author || !bookInfo.synopsis || !bookInfo.coverImage || !bookInfo.category) {
          alert("Por favor, completa todos los campos");
          return;
        }
    
        const formData = new FormData();
        formData.append('isbn', bookInfo.isbn);
        formData.append('title', bookInfo.title);
        formData.append('author', bookInfo.author);
        formData.append('synopsis', bookInfo.synopsis);
        formData.append('category', bookInfo.category);
        formData.append('coverImage', bookInfo.coverImage);
    
        fetch('http://localhost:4000/libros/subir', {
          method: 'POST',
          body: formData,
        })
          .then((res) => res.text())
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
    
        setBookInfo({
          isbn: '',
          title: '',
          author: '',
          synopsis: '',
          coverImage: null,
          category: '', // Restablecemos la categoría
        });
      };
    

  return (
    <>
        <NavBar />
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
            <FormControl fullWidth margin="normal">
                <InputLabel>Categoría</InputLabel>
                <Select
                name="category"
                value={bookInfo.category}
                onChange={handleChange}
                >
                <MenuItem value="Aventura">Aventura</MenuItem>
                <MenuItem value="Romance">Romance</MenuItem>
                <MenuItem value="Misterio">Misterio</MenuItem>
                <MenuItem value="Ciencia Ficción">Ciencia Ficción</MenuItem>
                </Select>
            </FormControl>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <Button variant="contained" color="primary" type="submit" fullWidth>
                Enviar
            </Button>
            </form>
        </Paper>
        </Container>
    </>
  );
};

export default AgregarLibro;
