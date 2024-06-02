import { Link } from "react-router-dom"
import "../../../src/App.scss"
import "../Footer/Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
    <Link to={"/"} className="nav-link">Home</Link>
    <Link to={"/funkos"} className="nav-link">Funkos</Link>
    <Link to={"/logout"} className="nav-link">Cerrar sesión</Link>
  </div>
  )
}

export default Footer