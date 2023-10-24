import React, { useState } from 'react';
import { Button, Container, Paper, TextField, Typography, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel } from '@mui/material';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const formDataUpload = new FormData();
    formDataUpload.append('name', formData.name);
    formDataUpload.append('email', formData.email);
    formDataUpload.append('password', formData.password);

    fetch('http://localhost:4000/libros/subir', {
      method: 'POST',
      body: formDataUpload,
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        // Puedes realizar alguna acción adicional aquí después de enviar el formulario.
      })
      .catch((err) => console.error(err));

    // Resto del código
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
          <TextField
            label="Confirmar Contraseña"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Sexo</FormLabel>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Hombre" />
              <FormControlLabel value="female" control={<Radio />} label="Mujer" />
            </RadioGroup>
          </FormControl>
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
