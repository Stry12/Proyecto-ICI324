import './App.css'
import Button from 'react-bootstrap/Button'

export function Navegacion () {
    return (
        <div>
            <nav className='content-buttons'>
                <ul className='buttons-list'>
                    <li className='button-nav'><a className='button-nav-text'>Inicio</a></li>
                    <li className='button-nav'><a className='button-nav-text'>Tradeos</a></li>
                    <li className='button-nav'><a className='button-nav-text'>Libros</a></li>
                    <li className='button-nav'><a className='button-nav-text'>Mis publicaciones</a></li>
                </ul>         
            </nav>
        </div>
    )
}