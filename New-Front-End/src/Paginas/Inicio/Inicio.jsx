import React, {Suspense, lazy, useEffect, useState } from 'react';
import '../../App.css'
import Carrusel from './Componentes/Carrusel';

const apiUrl = 'http://localhost:4000';
const Inicio = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        const obtenerLibros = async () => {
            try {
                const response = await fetch(`${apiUrl}/libros/getlibros`);

                if (!response.ok) {
                    throw new Error(`Error al obtener los libros: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };
        obtenerLibros();
    }, []);

  return (
    <>
        <Suspense fallback={<div>Cargando...</div>}>
            <Carrusel libros={data.libros}></Carrusel>
        </Suspense>
    </>
  );
};

export default Inicio;
