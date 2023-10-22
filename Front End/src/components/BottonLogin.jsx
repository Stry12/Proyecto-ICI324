import "../App.css"
import {Avatar} from "@mui/material";
import { Link } from "react-router-dom"

export default function BottonLogin() {
  return (<>
    <div className="login">
        <h2 className="login-opciones">
            <Link to="/Logearse">Login</Link>
          </h2>
        <Avatar className="login-contenido"></Avatar>
    </div>
  </>
  );
}