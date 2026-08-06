import { Link } from "react-router-dom";

function Inicio() {
  return (
    <section className="inicio">
      <h1>Catálogo de personajes</h1>
      <p>
        Esta aplicación permite consultar personajes de la serie{" "}
        <em>Rick and Morty</em> utilizando React y una API pública.
      </p>
      <Link className="boton" to="/personajes">
        Ver personajes
      </Link>
    </section>
  );
}

export default Inicio;
