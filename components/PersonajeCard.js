function PersonajeCard({ personaje }) {
  const estadoClase =
    personaje.status === "Alive"
      ? "vivo"
      : personaje.status === "Dead"
      ? "muerto"
      : "desconocido";

  return (
    <article className="tarjeta">
      <div className="tarjeta-imagen">
        <img src={personaje.image} alt={personaje.name} />
        <span className={`estado-punto ${estadoClase}`}></span>
      </div>
      <div className="tarjeta-info">
        <h2>{personaje.name}</h2>
        <p>
          <strong>Estado:</strong> {personaje.status}
        </p>
        <p>
          <strong>Especie:</strong> {personaje.species}
        </p>
        <p>
          <strong>Género:</strong> {personaje.gender}
        </p>
      </div>
    </article>
  );
}

export default PersonajeCard;
