import React, { useEffect, useState } from 'react';
import NavBar from '../../Componentes/Navbar';
import { Box, Button, Card, CardActionArea, CardMedia, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../App.css'

const apiUrl = 'http://localhost:4000';

const Libros = () => {

  
  const [data, setData] = useState([]);
  const cardMediaStyle = {
    height: 320,
    transition: 'transform 0.2s',
  };

  useEffect(() => {
    fetch(`${apiUrl}/libros/get/nosql`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData.libros))
      .catch((error) => console.error('Error al obtener datos de la API:', error));
  }, []);

  console.log(data);

  return (
    <>
      <Link to="/Libros/agregar" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" style={{ margin: '10px' }}>
          Agregar
        </Button>
      </Link>
      <Grid container spacing={0} sx={{
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        {data.map((libro, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card sx={{
              maxWidth: 200,
              margin: '20px auto', // Alinea horizontalmente con margen igual
            }}>
              <CardActionArea>
                <Link to={`/Libros/informacion`}>
                  <div className="cardMediaContainer">
                    <CardMedia
                      sx={cardMediaStyle}
                      className="cardMediaImage"
                      image={`${apiUrl}/imagenes/portadas/${libro.coverImage}`}
                    />
                    <div className="cardMediaOverlay"></div>
                  </div>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Libros;
