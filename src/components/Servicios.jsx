import React from "react";
import "./Servicios.css";
import ImageGallery from "./ImageGallery";
function Servicios() {
  const serviceImages = [
    {
      id: 1,
      src: "src/assets/icons/traditional.svg",
      alt: "Tradicional",
      description: "Manicura tradicional es...",
    },
    {
      id: 2,
      src: "src/assets/icons/semipermanent.svg",
      alt: "Semipermanente",
      description: "Esmaltado semipermanente es...",
    },
    {
      id: 3,
      src: "src/assets/icons/dippowder.svg",
      alt: "Dipping powder",
      description: "Dipping powder es...",
    },
    {
      id: 4,
      src: "src/assets/icons/art-2.svg",
      alt: "Capping gel",
      description: "Capping gel es...",
    },
    {
      id: 5,
      src: "src/assets/icons/polygel.svg",
      alt: "Soft gel",
      description: "Soft gel es...",
    },
  ]

  return (
    <>
      <h2 className="text-center">Servicios</h2>
      <div className="my-4"></div>
      <p>
        ¿Quieres lucir unas manos y uñas espectaculares? En Nombre de VG Nails
        Art Studio, te ofrecemos una experiencia de manicura excepcional que
        resaltará la belleza natural de tus manos y te llenará de confianza.
        Nuestro talentoso equipo de profesionales en manicura se apasiona por
        cuidar y embellecer tus uñas con un toque de creatividad y estilo.
        Utilizando productos de alta calidad y técnicas innovadoras, te
        garantizamos resultados duraderos y deslumbrantes.
      </p>

      <p>
        Ya sea que desees un clásico manicure, una elegante manicura francesa o
        explorar las últimas tendencias en nail art, estoy aquí para hacer
        realidad tus deseos. Además, te ofrezco servicios de spa para manos que
        te permitirán relajarte y sentirte renovada. En nombre de VG Nails Art
        Studio, tu satisfacción es nuestra prioridad. Me voy a esforzar en lo
        maximo para brindarte un servicio personalizado y una atención cálida
        para que te sientas como en casa en nuestro salón. ¡Reserva tu cita hoy
        mismo y descubri cómo puedo transformar tus uñas en una obra de arte! Te
        espero con los pinceles listos para crear una manicura que te haga
        brillar.
      </p>
      <p>
        Explora nuestra amplia gama de servicios de manicura, pedicura,
        esmaltado semipermanente, tratamientos para uñas y más. ¡Descubre cómo
        realzar la belleza de tus manos y uñas!
      </p>
      <p>Victoria</p>
      <div>
        
        <ImageGallery images={serviceImages} className={"row-cols-1 row-cols-lg-3 g-4 row-with-icons"} cardClassName={"card-with-icon"} imgClassName={"img-with-icon my-3"}/>
      </div>
    </>
  );
}

export default Servicios;
