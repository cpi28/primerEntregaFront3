/* eslint-disable react/prop-types */
export default function Card({data}) {
  return (
    <div>
      <h2>Información enviada:</h2>
      <p>Nombre: {data.nombre}</p>
      <p>Color favorito: {data.color}</p>
    </div>
  );
}
