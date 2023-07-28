import React from "react";
import "./Contacto.css";
import ManicuriaRegistro from "./ManicuriaRegistro";

function Contacto() {
  return (
    <>
      <h2 className="text-center">Contacto</h2>
      <p>
        ¿Listas para lucir unas manos y uñas espectaculares? ¡Estaria encantada
        de escucharte! En VG Nails Art Studio, me comprometo a brindarte una
        experiencia excepcional y resaltar la belleza natural de tus manos.
      </p>
      <p>
        Si tienes alguna pregunta sobre nuestros servicios, deseas hacer una
        reserva o simplemente quieres saber más sobre cómo podemos realzar tus
        uñas, no dudes en contactarme. Estoy aquí para ayudarte y asegurarme de
        que tengas una visita inolvidable en este espacio.
      </p>
      <p>
        ¡Te garantizo una atención cálida y personalizada! Me encuentro lista
        para crear verdaderas obras de arte en tus uñas y dejarte sintiéndote
        simplemente hermosa.
      </p>
      <p>Puedes comunicarte con nosotros a través de los siguientes medios:</p>
      <div className="row">
        <div className="col-8">
          <ManicuriaRegistro key={1} />
        </div>
        <div className="col-4">
          <h3 className="text-center">REDES</h3>
        </div>
      </div>
      <p>
        Espero verte pronto en VG Nails Art Studio. ¡Reserva tu cita y comenza a
        disfrutar de una manicura de calidad y un servicio excepcional!
      </p>
    </>
  );
}

export default Contacto;
