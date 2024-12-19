// src/components/FormularioRegistro.jsx
import { useState } from "react";
import "../estilos/formulario.css";

const FormularioRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [materias, setMaterias] = useState([""]);
  const [fechas, setFechas] = useState([""]);
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!nombre || !correo || materias.some((m) => !m) || fechas.some((f) => !f)) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    setMensaje(
      `Gracias, ${nombre}. Has cursado las siguientes materias: ${materias.join(
        ", "
      )} en las fechas: ${fechas.join(", ")}.`
    );
  };

  const manejarCambioMateria = (index, valor) => {
    const nuevasMaterias = [...materias];
    nuevasMaterias[index] = valor;
    setMaterias(nuevasMaterias);
  };

  const manejarCambioFecha = (index, valor) => {
    const nuevasFechas = [...fechas];
    nuevasFechas[index] = valor;
    setFechas(nuevasFechas);
  };

  const agregarCampo = () => {
    setMaterias([...materias, ""]);
    setFechas([...fechas, ""]);
  };

  return (
    <div className="container">
      <h2>Formulario de Registro</h2>
      <form onSubmit={manejarEnvio}>
        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        <div className="campo">
          <h3>Materias Cursadas</h3>
          {materias.map((materia, index) => (
            <div className="materia-fecha" key={index}>
              <label>Materia:</label>
              <input
                type="text"
                value={materia}
                onChange={(e) => manejarCambioMateria(index, e.target.value)}
                required
              />
              <label>Fecha:</label>
              <input
                type="date"
                value={fechas[index]}
                onChange={(e) => manejarCambioFecha(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={agregarCampo}>
            Agregar Materia
          </button>
        </div>

        <button type="submit">Enviar</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default FormularioRegistro;
