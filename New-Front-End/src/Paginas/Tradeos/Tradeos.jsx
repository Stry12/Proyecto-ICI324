import React from 'react';
import NavBar from '../../Componentes/Navbar';
import '../../App.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const apiUrl = 'http://localhost:4000';

const Tradeos = () => {

  return (
    <>
      <Link to="/Tradeos/agregar" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" style={{ margin: '10px' }}>
          Agregar
        </Button>
      </Link>
    </>
  );
};

export default Tradeos;