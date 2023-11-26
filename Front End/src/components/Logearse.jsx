// Importa useState para manejar el estado del mensaje de error
import React, { useState } from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function LoginForm() {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/user/getuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          NombreDeUsuario: formData.NombreDeUsuario,
          password: formData.password,
        }),
      });

      if (response.ok) {
        // La autenticación fue exitosa
        console.log('Inicio de sesión exitoso');
        setError(''); // Restablecer el estado de error
        // Puedes redirigir al usuario a otra página o realizar otras acciones necesarias
      }
       else {
        // La autenticación falló, manejar el mensaje de error
        const data = await response.json();
        setError(data.error || 'Error de inicio de sesión');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error.message);
      setError('Error de red');
    }
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
