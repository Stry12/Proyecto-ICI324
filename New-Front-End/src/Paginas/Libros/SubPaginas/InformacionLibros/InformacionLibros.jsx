import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../../../Componentes/Navbar';
import '../../../../App.css'

const apiUrl = 'http://localhost:4000';

const InformacionLibros = () => {
    const {id} = useParams();
  return (
    <>
        <Card sx= {{
            maxWidth: 260,
        }}>
            <CardMedia
                component='img'
                height='400'
                image='/prueba.jpeg'
            />
            <CardContent>
              <div className='cardInformacionLibro'>
                <div className='cardInformacionLibroTitulo'>
                  Titulo
                </div>
                <div className='cardInformacionLibroAutor'>
                  Autor
                </div>
                <div className='cardInformacionLibroEditorial'>
                  Editorial
                </div>
                <div className='cardInformacionLibroISBN'>
                  ISBN
                </div>
                <div className='cardInformacionLibroSinopsis'>
                  Sinopsis
                </div>
              </div>
            </CardContent>
        </Card>
    </>
  );
};

export default InformacionLibros;
