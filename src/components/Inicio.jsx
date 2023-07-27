// Inicio.jsx
import React from "react";
import Button from "./Button";
import "./Inicio.css"; // Assuming you have a separate CSS file for Inicio styles.

const Inicio = () => {
  return (
    <div className="home-section-container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <h1>Bienvenidos a Nail Art Studio</h1>
          <p>
            En nombre de VG Nails Art Studio, me destaco a resaltar la belleza natural de tus manos y uñas mientras te brindo una experiencia relajante y revitalizante.
            Me encuentro comprometida con la excelencia y la creatividad, asegurando que cada visita sea única y satisfactoria.
          </p>
          <p>
            ¿Qué nos hace especiales? 
            Mi pasión por el arte de la manicura y la atención al detalle. 
            Cada uno de mis servicios es realizado con precisión y cuidado para lograr resultados excepcionales. 
            Utilizando productos de la más alta calidad, respetuosos con tus uñas y el medio ambiente, para que puedas lucir unas manos saludables y hermosas.
          </p>
          <p>
          Desde un look clásico y elegante hasta diseños vanguardistas y originales, estoy aquí para hacer realidad tus ideas y transformar tus uñas en verdaderas obras de arte.
          Ya sea para una ocasión especial, un mimo personal o simplemente porque te lo mereces.
          </p>
          <p>
          Te ofrezco un ambiente acogedor y relajante donde podrás escapar del ajetreo diario y dedicar tiempo para ti misma. 
          Esforzandome siempre por brindar un servicio excepcional, superar tus expectativas y dejarte con una sonrisa en el rostro cada vez que me visites.
          </p>
          <p>
          Estoy ansiosa por recibirte en VG Nails Art Studio mi lugar, tu lugar y ser parte de tu rutina de cuidado personal.
          ¡Reserva tu cita y comenza a lucir unas uñas deslumbrantes!
          </p>

          <Button className="btn btn-primary">Read More</Button>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            src="src/assets/nails-art-studio.jpg"
            alt="Nails Art Studio"
            className="rounded-circle show-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
