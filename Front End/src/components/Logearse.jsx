import { Link } from "react-router-dom"

export default function Logearse() {

    return (
        <div className="Logearse">
            <h1 className="LoginPage-titulo">Inicio de sesión</h1>
            <form>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Contraseña: </label>
                    <input type="password" id="password" name="password" />
                </div>
            </form>
            <button>Iniciar sesión</button>
            <Link to="/Registrarse">Registrarse!</Link>
        </div>


    )

}