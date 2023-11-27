import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';

import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import NavBar from '../../Componentes/Navbar';
import EliminarCuenta from '../../Componentes/EliminarCuenta';
import CambiarContraseña from './CambiarContraseña';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const apiUrl = 'http://localhost:4000';

const UserProfileViewer = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/user/getinfo/${cookies.get('idDeUsuario')}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then((jsonData) => setUserData(jsonData.usuario))
      .catch((error) => console.error('Error al obtener datos de la API:', error));
  }, []);

  // Mientras se carga la información, puedes mostrar un mensaje de carga
  if (!userData) {
    return <p>Cargando datos...</p>;
  }

  const logout = () => {
    console.log("logout")
    cookies.remove('idDeUsuario', {path: '/'});
    window.location.href='./Inicio';
    navigate('/Inicio');
  };

  return (
    <>
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Avatar src={userData.avatar} alt={userData.NombreDeUsuario} sx={{ width: 120, height: 120 }} />
              <Box marginLeft={2}>
                <Typography variant="h6">{userData.NombreDeUsuario}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  ID: {cookies.get('idDeUsuario')}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Descripción: {userData.descripcion}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle1" color="textSecondary">
                {userData.CorreoElectronico}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Age: {userData.age}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Intereses: {userData.intereses}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Stack direction="column" spacing={2}>
            <Button variant="outlined" startIcon={<EditIcon />}>
              Editar Perfil
            </Button>
            <CambiarContraseña />
            <Button variant="outlined" onClick={logout} startIcon={<LogoutIcon />}>
              Cerrar Sesión
            </Button>
            <EliminarCuenta />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default UserProfileViewer;
