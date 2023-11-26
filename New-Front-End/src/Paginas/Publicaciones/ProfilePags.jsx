import React from 'react';
import Button from '@mui/material/Button';
import NavBar from '../../Componentes/Navbar';
import AddIcon from '@mui/icons-material/Add';
import {Card, CardContent, Typography } from '@mui/material';
import PostList from './PostList'; // Suponiendo que el archivo se encuentra en el mismo directorio

const ProfilePage = () => {
  // Suponiendo que tienes un arreglo de publicaciones
  const userPosts = [
    { id: 1, title: 'Publicación 1', content: 'Contenido de la publicación 1', image: "", },
    { id: 2, title: 'Publicación 2', content: 'Contenido de la publicación 2', image: "", },
    { id: 2, title: 'Publicación 2', content: 'Contenido de la publicación 2', image: "", },
    { id: 2, title: 'Publicación 2', content: 'Contenido de la publicación 2', image: "", },
    { id: 2, title: 'Publicación 2', content: 'Contenido de la publicación 2', image: "", },
    { id: 2, title: 'Publicación 2', content: 'Contenido de la publicación 2', image: "", },
    // ... más publicaciones
  ];

  return (
    <div>
        <Card>
            <CardContent>    
                <Button variant="contained" startIcon={<AddIcon/>}>
                    Crear Publicación
                </Button>
            </CardContent> 
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
