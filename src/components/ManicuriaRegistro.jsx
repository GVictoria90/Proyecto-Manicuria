import React, { useState } from "react";
import Header from "./Header";

function ManicuriaRegistro() {
  const urlBase = "https://64c08c6c0d8e251fd1122d27.mockapi.io/api/v1/reservas";

  const [nombreCliente, setNombreCliente] = useState("");
  const [servicio, setServicio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nuevoRegistro = {
      NombreCliente: nombreCliente,
      Servicio: servicio,
      Fecha: fecha,
      Hora: hora,
    };

    addOne(nuevoRegistro);
  };

  async function addOne(registro) {
    try {
      const response = await fetch(urlBase, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registro),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <h2 className="text-center">Registro de Manicuría</h2>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="nombreCliente" className="form-label">
              Nombre del Cliente:
            </label>
            <input
              type="text"
              id="nombreCliente"
              className="form-control"
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="servicio" className="form-label">
              Servicio de Manicuría:
            </label>
            <input
              type="text"
              id="servicio"
              className="form-control"
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="fecha" className="form-label">
              Fecha:
            </label>
            <input
              type="date"
              id="fecha"
              className="form-control"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="hora" className="form-label">
              Hora:
            </label>
            <input
              type="time"
              id="hora"
              className="form-control"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>
          <div className="Boton text-center my-3">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ManicuriaRegistro;
