import React, { useState } from "react";
import Button from "./Button";

function ManicuriaRegistro() {
  const urlBase = "https://64c08c6c0d8e251fd1122d27.mockapi.io/api/v1/reservas";

  const [nombreCliente, setNombreCliente] = useState("");
  const [servicio, setServicio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nuevoRegistro = {
      name: nombreCliente,
      service: servicio,
      phoneNumber: telefono,
      dateTime: convertDate(fecha),
    };

    addOne(nuevoRegistro);
  };

  const convertDate = (date) => {
    const dateObject = new Date(date);

    const formattedDate = dateObject.toLocaleString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Buenos_Aires",
    });

    return formattedDate;
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
              required
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
              required
            />
          </div>
          <div>
            <label htmlFor="telefono" className="form-label">
              Telefono de contacto:
            </label>
            <input
              type="tel"
              id="telefono"
              className="form-control"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="fecha" className="form-label">
              Fecha:
            </label>
            <input
              type="datetime-local"
              id="fecha"
              className="form-control"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </div>
          <div className="Boton text-center my-3">
            <Button type={"submit"} className={""}>
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ManicuriaRegistro;
