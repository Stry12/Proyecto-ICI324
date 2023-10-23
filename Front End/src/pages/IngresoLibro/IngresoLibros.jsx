import React from "react";
import { Grid } from '@mui/material';
import Formulario from "../../components/Ingreso_Libro/Formulario";
import BookInfo from '../../components/VistaLibro/InformacionLibro';

const libro = {
  portada: 'url_de_la_portada.jpg',
  titulo: 'Título del libro',
  autor: 'Nombre del autor',
  isbn: '1234567890',
  sinopsis: 'Esta es la sinopsis del libro...',
};

function IngresoLibros() {
  return ( <>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <BookInfo book={libro} />
      </Grid>
    </Grid>
  </>     
  );
}

export default IngresoLibros;