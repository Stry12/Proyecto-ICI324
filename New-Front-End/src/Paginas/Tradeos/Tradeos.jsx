import React, { useEffect } from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

const Tradeos = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Verificar si 'idDeUsuario' no está presente en las cookies
    if (cookies.get('idDeUsuario') == null) {
      // Redirigir a la página '/Inicio'
      navigate('/Inicio');
    }
  }, []);


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