import React from 'react';
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

const user = {
    id: "1234",
    name: 'Juan Perez',
    email: 'juan@example.com',
    //avatar: 'URL_DEL_AVATAR',
    age: 30,
    intereses: 'Aqui los intereses',
    descripcion : 'aqui la descripcion',

    // Otros datos del usuario que desees mostrar
  };

const UserProfileViewer = () => {
    console.log(cookies.get('idDeUsuario'));
  return (
    <>
        <Card>
            <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Avatar src={user.avatar} alt={user.name}  sx={{ width: 120, height: 120 }}/>
                        <Box marginLeft={2}>
                        <Typography variant="h6">{user.name}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            ID: {user.id}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Descripción: {user.descripcion}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1" color="textSecondary">
                            {user.email}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Age: {user.age}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Intereses: {user.intereses}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
        <Card>    
            <CardContent>
                <Stack direction="column" spacing={2}>
                    <Button variant="outlined" startIcon={<EditIcon/>}>
                        Editar Perfil
                    </Button>
                    <CambiarContraseña/>
                    <Button variant="outlined" startIcon={<LogoutIcon/>}>
                        Cerrar Sesión
                    </Button>
                    <EliminarCuenta/>
                </Stack>
            </CardContent>
        </Card>
    </>
  );
};

export default UserProfileViewer;