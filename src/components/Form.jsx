import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Form(props) {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (nombre.trim() === "" && nombre.length < 3) {
      setMensajeError("Debe ingresar un nombre de 3 caracteres por lo menos");
    } else if (color.trim() === "" && color.length < 6) {
      setMensajeError("Debe ingresar un color de 6 caracteres por lo menos");
    } else {
      // eslint-disable-next-line react/prop-types
      props.onSubmit({ nombre, color });
      setNombre("");
      setColor("");
      setMensajeError("");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre: 
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>
        <br />

        <label>
          Color favorito: 
          <input
            type="text"
            placeholder="Ingresa tu color favorito"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>

      {mensajeError && <p className="error">{mensajeError}</p>}
    </>
  );
}
