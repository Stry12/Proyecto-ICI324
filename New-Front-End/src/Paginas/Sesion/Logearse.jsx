// Importa useState para manejar el estado del mensaje de error
import React, { useState } from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    NombreDeUsuario: '',
    password: '',
  });

  // Nuevo estado para manejar mensajes de error
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch('http://localhost:4000/user/getuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        NombreDeUsuario: formData.NombreDeUsuario,
        password: formData.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw new Error(data.error || 'Error de inicio de sesión');
          });
        }
      })
      .then((data) => {
        // La autenticación fue exitosa
        console.log('Inicio de sesión exitoso');
        console.log('Usuario ID:', data.userID);
  
        // Guardar la cookie
        cookies.set('idDeUsuario', data.userID, { path: '/' });
  
        setError(''); // Restablecer el estado de error
        window.location.href = '/Home';
        // Puedes redirigir al usuario a otra página o realizar otras acciones necesarias
      })
      .catch((error) => {
        console.error('Error al enviar la solicitud:', error.message);
        setError('Error de red');
      });
  };
  

  console.log(formData);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" component="h2">
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre de Usuario"
            name="NombreDeUsuario"
            value={formData.NombreDeUsuario}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contraseña"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Iniciar Sesión
          </Button>
        </form>
        {error && (
          <Typography variant="body2" style={{ marginTop: '10px', color: 'red' }}>
            {error}
          </Typography>
        )}
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          <Link to="/reset-password">¿Olvidaste tu contraseña?</Link>
        </Typography>
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          <Link to="/Registrarse">Registrarse</Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default LoginForm;
