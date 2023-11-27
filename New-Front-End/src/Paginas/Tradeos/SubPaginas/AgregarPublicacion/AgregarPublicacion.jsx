import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Grid,
  Autocomplete
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import NavBar from '../../../../Componentes/Navbar.jsx';
import '../../../../App.css';
import Cookies from 'universal-cookie';

const apiUrl = 'http://localhost:4000';
const cookies = new Cookies();

const AgregarPublicacion = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [isbn, setIsbn] = useState('');
  const [condition, setCondition] = useState('');
  const [images, setImages] = useState([]);

  // Buscador
  const [buscados, setBuscados] = useState(new Map());
  const [librosBuscadosList, setLibrosBuscadosList] = useState([]);

  const [top100Films, setBooks] = useState([]);

  const handleOptionSelected = (event, value) => {
    if (value) {
      const nuevoMapa = new Map(buscados); // Crear una nueva instancia del Map para garantizar la inmutabilidad
      nuevoMapa.set(value.isbn, value.title);
      setBuscados(nuevoMapa);

      // Actualizar la lista de libros buscados
      const nuevosLibrosBuscados = Array.from(nuevoMapa.entries()).map(([clave, valor]) => ({ isbn: clave, title: valor }));
      setLibrosBuscadosList(nuevosLibrosBuscados);
    }
  };

  const handleOptionDelete = (ISBN) => {

      console.log(ISBN);
      buscados.delete(ISBN)
      const nuevoMapa = new Map(buscados); // Crear una nueva instancia del Map para garantizar la inmutabilidad
      setBuscados(nuevoMapa);

      // Actualizar la lista de libros buscados
      const nuevosLibrosBuscados = Array.from(nuevoMapa.entries()).map(([clave, valor]) => ({ isbn: clave, title: valor }));
      setLibrosBuscadosList(nuevosLibrosBuscados);
  };

  useEffect(() => {
    const fetchBooks = async () => {
    try {
        const response = await fetch(`${apiUrl}/libros/get/librosisbnauthor`);
        const data = await response.json();
        if (data && data.libro) {
          const formattedBooks = data.libro.map((libro) => ({
            id: libro._id,
            title: libro.title,
            isbn: libro.isbn,
            autor: libro.author
          }));
          
          setBooks(formattedBooks);
  
          // Imprimir en la consola
          console.log('Lista de libros:', formattedBooks);
        } else {
          console.log('La respuesta de la API no contiene datos esperados:', data);
        }
    } catch (error) {
        console.error('Error al obtener los libros:', error);
      }
    };
    fetchBooks();
  }, []);
  
  console.log(top100Films)

  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });



  //Fin Buscador

  const handleImageUpload = (event) => {
    const selectedImages = event.target.files;
    setImages([...selectedImages]);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!title || !isbn || !condition || !images) {
      alert("Por favor, completa todos los campos");
      return;
    }

    if(cookies.get('idDeUsuario') == null){
      return navigate('/Inicio');
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('isbn', isbn);
    console.log(isbn)
    formData.append('condition', condition);
    formData.append('id_usuario', cookies.get('idDeUsuario'));
    images.forEach((image) => {
      formData.append(`images`, image);
    });

    

    fetch(`${apiUrl}/publicaciones/subir`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(formData.get('title'));
    console.log(formData.get('isbn'));
    console.log(formData.get('condition'));
    console.log(formData.get('id_usuario'));
    // Accede a cada imagen y muestra información en la consola

    
    setTitle('');
    setIsbn('');
    setCondition('');
    setImages('');
    navigate('/Tradeos');
  };

  const handleOptionChangeISBN = (event, value) => {
    setIsbn(value ? value.isbn : ''); // Si value existe, establece su isbn; de lo contrario, establece una cadena vacía
  };


  return (
    <>
      <Paper
        elevation={3}
        sx={{
          padding: '20px',
          margin: '20px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <Grid  container spacing={2}>
            {/* Columna izquierda para cargar imágenes */}
            <Grid item xs={12} sm={8} md={8} lg={6} xl={6} className='container-imagen'>
              <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Subir Imagenes
                <input className='input-img' type='file' accept='image/*' multiple onChange={handleImageUpload}>
                </input>
              </Button>

              {images && images.length > 0 && (
                <Grid  container spacing={2} className='container-imagen-publi'>
                  {Array.from(images).map((image, index) => (
                      <Grid item key={index} xs={12} sm={10} md={8} lg={6} xl={3}>
                        <img
                          style={{ width: '200px', height: '300px' }}
                          className='container-imagen-publi-img'
                          key={index}
                          src={URL.createObjectURL(image)}
                        />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>

            {/* Columna derecha para campos de texto */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Titulo de la publicacion"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                fullWidth
                sx = {{ mb: 2}}
              />

              <Autocomplete
                fullWidth
                id="grouped-demo"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.isbn || "Default Label"}
                value={top100Films.find(option => option.isbn === isbn) || null}
                onChange={handleOptionChangeISBN}
                sx={{ mb: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="ISBN"
                  />
                )}
              />



              <FormControl fullWidth
              sx={{mb: 2}}>
                <InputLabel disableAnimation={false} >Estado del Libro</InputLabel>
                <Select
                  value={condition}
                  onChange={handleConditionChange}
                  required
                >
                  <MenuItem value="Nuevo">Nuevo</MenuItem>
                  <MenuItem value="Casi Nuevo">Casi Nuevo</MenuItem>
                  <MenuItem value="Usado">Usado</MenuItem>
                </Select>
              </FormControl>

              <Autocomplete
                fullWidth
                id="grouped-demo"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.title + " - " + option.isbn}
                value={buscados}
                onChange={handleOptionSelected}
                sx={{ mb: 2 }}
                renderInput={(params) => <TextField key={params.isbn} {...params} label="Libros Buscados" />}
              />

              
              <Grid container spacing={1}>
                {librosBuscadosList.map((libro, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}                    key={index} 
>
                    <Button 
                    sx={{
                      fontSize: '10px',
                    }} 
                    onClick={() => handleOptionDelete(libro.isbn)}
                    >
                      {libro.title} 
                    </Button>
                  </Grid>
                ))}
              </Grid>

            </Grid>
          </Grid>

          {/* Botón "Subir Publicación" a la derecha */}
          <Grid container justifyContent="flex-end" sx={{ marginTop: '10px' }}>
            <Button type="submit" variant="contained" color="primary">
              Subir Publicación
            </Button>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default AgregarPublicacion;
