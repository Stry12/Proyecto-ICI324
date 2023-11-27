import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import NavBar from '../../Componentes/Navbar';
import AddIcon from '@mui/icons-material/Add';
import {Card, CardContent, Typography } from '@mui/material';
import PostList from './PostList'; // Suponiendo que el archivo se encuentra en el mismo directorio
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const apiUrl = 'http://localhost:4000';
const cookies = new Cookies();

const ProfilePage = () => {
  
  const [userPosts, setuserPosts] = useState([]);
  const userId = cookies.get('idDeUsuario');  // Ajusta esto con el ID del usuario que deseas recuperar
  const navigate = useNavigate();


  useEffect(() => {
    // Verificar si 'idDeUsuario' no está presente en las cookies
    if (cookies.get('idDeUsuario') == null) {
      // Redirigir a la página '/Inicio'
      navigate('/Inicio');
    }
  }, []);

  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const response = await fetch(`${apiUrl}/publicaciones/get/${userId}`);
        const data = await response.json();

        if (data && data.length > 0) {
          setuserPosts(data);
        } else {
          console.log('No se encontraron publicaciones para el usuario con ID:', userId);
        }
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    fetchPublicaciones();
  }, [userId]);  // Este efecto se ejecutará cada vez que cambie el userId

  console.log(userPosts);

    return (
    <div>
        <Card>
            <Link to="/Tradeos/agregar" style={{ textDecoration: 'none' }}>
              <CardContent>    
                  <Button variant="contained" startIcon={<AddIcon/>}>
                      Crear Publicación
                  </Button>
              </CardContent> 
            </Link>
        </Card>
            
        <Card>
            <CardContent>
                <PostList posts={userPosts} />
            </CardContent>
        </Card>

                
    </div>
  );
};

export default ProfilePage;
