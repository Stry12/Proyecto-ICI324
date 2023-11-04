import React, {useState} from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Grid
} from '@mui/material';
import NavBar from '../../../../Componentes/Navbar.jsx';
import '../../../../App.css'


const apiUrl = 'http://localhost:4000';

const AgregarPublicacion = () => {
  const [title, setTitle] = useState('');
  const [isbn, setIsbn] = useState('');
  const [condition, setCondition] = useState('');
  const [images, setImages] = useState();

  const handleImageUpload = (event) => {
    const selectedImages = event.target.files;
    setImages(selectedImages);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <NavBar></NavBar>
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
        <TextField
          label="Título del Libro"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Estado del Libro</InputLabel>
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
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
        {images && images.length > 0 && (
          <Grid container spacing={2} 
          sx={{ marginTop: '10px',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                
          }}>
            {Array.from(images).map((image, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
                  <img
                    className='pre-imagenes-img'
                    key={index}
                    src={URL.createObjectURL(image)}
                  />
                </Grid>
            ))}
          </Grid>
        )}
      </form>
      <Button type="submit" variant="contained" color="primary">
          Subir Publicación
        </Button>
    </Paper>
    </>
  );
};

export default AgregarPublicacion;
