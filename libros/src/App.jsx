//import { Button } from "@mui/material"; //Más practico
import './App.css'
import LoginR from './Comunes/LoginR';
import SimpleBottomNavigation from './Comunes/SimpleBottomNavigation';

export function App(){
    return (
        <section className='contenedor'>
            <LoginR></LoginR>
            <SimpleBottomNavigation></SimpleBottomNavigation>
        </section>
    )
}