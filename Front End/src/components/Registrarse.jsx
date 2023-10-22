import { Link } from "react-router-dom"

export default function Registrarse() {
    const handleImageUpload = (e) =>{
        const selectedFile = e.target.files[0]
        console.log("Imagen sleccionada:".selectedFile);
    };

    return(
        <div className="Registro">
            <h1>Crea tu cuenta</h1>
                <form>
                    <div>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input type="text" id="username" name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div>
                        <label htmlFor="password">Correo: </label>
                        <input type="text" id="correo" name="correo" />
                    </div>
                    <div>
                        <label htmlFor="imagen">Imagen de perfil:</label>
                        <input
                            type="file"
                            id="imagen"
                            name="imagen"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>


                </form>
        </div>
    )



}