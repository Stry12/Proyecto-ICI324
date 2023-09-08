import './App.css'
import Button from 'react-bootstrap/Button'

export function Navegacion () {
    return (
        <div>
            <nav className='content-buttons'>
                <ul className='buttons-list'>
                    <li className='button-nav'>Inicio</li>
                    <li className='button-nav'>Tradeos</li>
                    <li className='button-nav'>Libros</li>
                    <li className='button-nav'>Mis publicaciones</li>
                </ul>         
            </nav>
        </div>
    )
}