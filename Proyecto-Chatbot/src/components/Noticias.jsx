import React, { useEffect, useState } from "react";
import "./Noticias.css";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const token = "e550567ffda222e49ea5d6f3a07c01";
  const url = "https://api.databursatil.com/v1/noticias";

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const response = await fetch(`${url}?token=${token}`);
        if (response.ok) {
          const data = await response.json();
          setNoticias(Object.values(data).slice(0, 10)); 
        } else {
          console.error("Error en la petición:", response.status);
        }
      } catch (error) {
        console.error("Error al obtener las noticias:", error);
      }
    };

    obtenerNoticias();
  }, []);

  return (
    <div className="container">
      <h4>Noticias Financieras</h4>
      {noticias.length > 0 ? (
        noticias.map((noticia, index) => (
          <div key={index} className="card">
            <h2 className="title">{noticia.titular}</h2>
            <p className="content">{noticia.contenido}</p>
            <a href={noticia.fuente} target="_blank" rel="noopener noreferrer" className="link">
              Leer más
            </a>
          </div>
        ))
      ) : (
        <p>Cargando noticias...</p>
      )}
    </div>
  );
}

export default Noticias;
