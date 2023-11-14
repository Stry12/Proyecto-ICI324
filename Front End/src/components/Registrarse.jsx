import React, { useState } from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Enviar datos al backend
    fetch('http://localhost:3000/setuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        // Puedes realizar alguna acción adicional aquí después de enviar el formulario.
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" component="h2">
          Registro
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
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
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Registrarse
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default RegistrationForm;

