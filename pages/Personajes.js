import { useEffect, useState } from "react";
import PersonajeCard from "../components/PersonajeCard";

function Personajes() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No fue posible obtener los personajes");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setPersonajes(datos.results);
        setCargando(false);
      })
      .catch((error) => {
        setError(error.message);
        setCargando(false);
      });
  }, []);

  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) {
    return <p className="mensaje-carga">Cargando personajes...</p>;
  }

  if (error) {
    return <p className="mensaje-error">{error}</p>;
  }

  return (
    <section>
      <h1>Personajes</h1>

      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar personaje..."
          value={busqueda}
          onChange={(evento) => setBusqueda(evento.target.value)}
        />
        <button onClick={() => setBusqueda("")}>Limpiar</button>
      </div>

      {personajesFiltrados.length === 0 ? (
        <p className="mensaje-vacio">No se encontraron personajes.</p>
      ) : (
        <div className="lista-personajes">
          {personajesFiltrados.map((personaje) => (
            <PersonajeCard key={personaje.id} personaje={personaje} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Personajes;
