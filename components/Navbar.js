import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-marca">Pickle Rick Fallas 🫩</h2>
      <div className="navbar-enlaces">
        <Link to="/">Inicio</Link>
        <Link to="/personajes">Personajes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
