import React, { useEffect, useState } from "react";

function Consulta() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la solicitud HTTP a la API aquí y actualizar el estado "data" con los resultados.
    // Por ejemplo, puedes usar la función fetch:
    fetch("http://localhost:4000/user/libros")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData[0])) // La API devuelve un array anidado, seleccionamos el primer elemento
      .catch((error) => console.error("Error al obtener datos de la API:", error));
  }, []);

  return (
    <>
      <h1>Libros</h1>
      {data && data.map((libro) => (
        <div key={libro.ISBN}>
          <h2>Título: {libro.Titulo}</h2>
          <p>Autor: {libro.Autor}</p>
          <p>Descripción: {libro.Descripción}</p>
          <p>Categoría: {libro.Categoria}</p>
          <img src={libro.Portada} alt={`Portada de ${libro.Titulo}`} />
        </div>
      ))}
    </>
  );
}

export default Consulta;
