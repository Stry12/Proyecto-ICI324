import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button, // Importa Button de Material-UI
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

const apiUrl = 'http://localhost:4000';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 200,
  margin: theme.spacing(2),
  [theme.breakpoints.down('xs')]: {
    maxWidth: '100%',
  },
}));

const StyledMedia = styled(CardMedia)({
  height: 300,
});

const StyledTitle = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 'bold',
});

const Consulta = () => {
  const [data, setData] = useState([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    // Realiza la solicitud HTTP a la API y actualiza el estado "data" con los resultados.
    fetch(`${apiUrl}/libros/getlibros`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData.libros))
      .catch((error) => console.error('Error al obtener datos de la API:', error));
  }, []);

  const columns = isSmallScreen ? 1 : 3;

  return (
    <div>
      <Link to="/AgregarLibro" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" style={{ margin: '10px' }}>
          Agregar
        </Button>
      </Link>
      <Grid container spacing={1}>
        {data.map((book, index) => (
          <Grid item key={index} xs={3} sm={6} md={4} lg={5} xl={2}>
            <StyledCard>
              <StyledMedia
                image={`${apiUrl}/imagenes/portadas/${book.nombre_imagen}`}
              />
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Consulta;
