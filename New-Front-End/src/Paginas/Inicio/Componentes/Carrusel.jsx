import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../App.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Grid, Box, Card, CardActionArea, CardMedia } from '@mui/material';
import '@mui/system';

const apiUrl = 'http://localhost:4000';

export default function Carrusel() {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch(`${apiUrl}/libros/get/sql`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then((jsonData) => setData(jsonData.libros))
        .catch((error) => console.error('Error al obtener datos de la API:', error));
    }, []);


    const cardMediaStyle = {
        height: 300,
        width: 200,
    };

    const cardimg = {
        height: "100%",
        width: "100%",
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '45vh', marginTop: '20px' }}>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                style={{ width: '100%' }}
                className='mySwiper'
                slidesPerView={3}
                breakpoints={{
                    "@0.00": { slidesPerView: 1, spaceBetween: 25 },
                    "@0.50": { slidesPerView: 2, spaceBetween: 10 },
                    "@1.00": { slidesPerView: 3, spaceBetween: 25 },
                    "@1.25": { slidesPerView: 3, spaceBetween: 20 },
                    "@1.50": { slidesPerView: 4, spaceBetween: 30 },
                    "@1.75": { slidesPerView: 5, spaceBetween: 20 },
                }}
            >
                {data.map((libro, index) => (
                    <SwiperSlide sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 200,
                        width: 200,
                    }} 
                    key={index}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Card sx={cardMediaStyle}>
                                    <CardActionArea>
                                        <CardMedia sx={cardimg} component={'img'} image={`${apiUrl}/imagenes/portadas/${libro.nombre_imagen}`} />
                                    </CardActionArea>
                                </Card>
                            </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Grid>
    );
}
