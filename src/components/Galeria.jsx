import React from "react";
import "./Galeria.css";
import ImageGallery from "./ImageGallery";
function Galeria() {

  const images = [
    {
      id: 1,
      src: "src/assets/images-diseño-uñas/services-1.jpg",
      alt: "Cuatro imágenes de uñas pintadas de diferentes colores",
    },
    {
      id: 2,
      src: "src/assets/images-diseño-uñas/services-2.jpg",
      alt: "Tres imágenes de uñas pintadas de diferentes colores, horizontalmente",
    },
    {
      id: 3,
      src: "src/assets/images-diseño-uñas/services-3.jpg",
      alt: "Tres imágenes de uñas pintadas de diferentes colores, verticalmente",
    },
  ];

  return (
    <>
      <h2 className="text-center">Galeria</h2>
      <div className="my-4">
        <p>
          ¡Les doy una calida bienvenida a mi Galería! Aquí, en VG Nails Art
          Studio, me enorgullezco de mostrar el arte y la creatividad a través
          de hermosas manicuras que han dejado a nuestras clientes encantadas.
          En esta galería, encontrarás una amplia variedad de estilos y diseños,
          desde los mas elegantes y clásicas manicuras francesas hasta atrevidos
          y modernos diseños de nail art. Cada imagen captura el cuidado
          meticuloso y la precisión con la que trabajamos para brindarte
          resultados sorprendentes.
        </p>
        <p>
          Nuestro talentoso equipo de manicuristas es experto en plasmar tus
          ideas y preferencias en tus uñas, creando verdaderas obras de arte que
          complementan tu estilo personal. Cada detalle, cada color y cada forma
          son cuidadosamente seleccionados para realzar la belleza natural de
          tus manos.
        </p>
        <p>
          Te invitamos a explorar nuestra galería y dejarte inspirar por las
          tendencias más actuales y los diseños más impresionantes. Ya sea que
          desees una manicura clásica para una ocasión especial o un diseño
          único para expresar tu personalidad, estamos listos para hacer
          realidad tus sueños de uñas perfectas.
        </p>
        <p>
          En VG Nails Art Studio, la satisfacción de nuestros clientes es
          nuestra mayor recompensa. Permítenos llevar tus uñas al siguiente
          nivel y descubrir cómo una manicura impecable puede elevar tu
          confianza y hacerte sentir simplemente hermosa.
        </p>
        <p>
          ¡Te espero con ansias para brindarte una experiencia excepcional!
          Reserva tu cita hoy mismo y únite a nuestra creciente lista de
          clientes satisfechos.
        </p>
        <ImageGallery images={images} className={"row-cols-1 row-cols-md-2 g-4"} cardClassName={"normal-card-image"} imgClassName={"normal-image"}/>
      </div>
    </>
  );
}

export default Galeria;
