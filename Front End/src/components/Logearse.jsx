import React, { useState } from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones como enviar los datos del formulario al servidor para la autenticación.
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" component="h2">
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Correo"
            name="email"
            value={formData.email}
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