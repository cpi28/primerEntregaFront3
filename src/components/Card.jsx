/* eslint-disable react/prop-types */
export default function Card({data}) {
  return (
    <div>
      <h2>Información enviada:</h2>
      <p>Hola {data.nombre}!</p>
      <p>Tu color favorito es el {data.color}</p>
    </div>
  );
}
