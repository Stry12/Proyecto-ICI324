import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import "../App.css"
import {styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';


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
                <StyledBottomNavigationAction component={Link}
        to="/" label="Inicio"/>
                <StyledBottomNavigationAction component={Link}
        to="/*" label="Tradeos" />
                <StyledBottomNavigationAction component={Link}
        to="/Consulta" label="Libros"/>
                <StyledBottomNavigationAction component={Link}
        to="/*" label="Mis Publicaciones"/>
                <StyledBottomNavigationAction component={Link}
        to="/IngresoLibro" label="Formulario"/>
            </StyledBottomNavigation>
        </Box>
   
  );
}