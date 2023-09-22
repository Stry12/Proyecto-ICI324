import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import "C:/Users/Salvador/OneDrive - alumnos.uv.cl/Escritorio/sexo/kellun_proyect/Proyecto-ICI324/libros/src/App.css"
import {styled } from "@mui/material/styles";

export default function SimpleBottomNavigation() {
const [value, setValue] = React.useState(0);

const StyledBottomNavigation = styled(BottomNavigation)(() => ({
        backgroundColor: '#333333'
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(() => ({
        color: 'white',
        fontWeight: 'bold',
        fontSize: '5rem',
        ".Mui-selected" : {color: "#9b9b9b"},
        "&:hover":{ backgroundColor: 'gray',
                    color: 'white'}

}));

  return (
        <Box className='contenedor-nav'            sx={{
            '& .MuiBottomNavigationAction-label': {
              fontSize: '1.0rem', // Ajusta el tamaño de la fuente aquí según tus necesidades
            },
          }} >
            <StyledBottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <StyledBottomNavigationAction label="Inicio"/>
                <StyledBottomNavigationAction label="Treadeos" />
                <StyledBottomNavigationAction label="Libros"/>
                <StyledBottomNavigationAction label="Mis Publicaciones"/>
            </StyledBottomNavigation>
        </Box>
   
  );
}