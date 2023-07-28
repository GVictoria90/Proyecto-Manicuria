import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ images, className, cardClassName, imgClassName }) => {

  return (
    <>
      <div className={"row " + className}>
        {images.map((image) => (
          <div key={image.id} className="col my-3">
            <div className={"card " + cardClassName}>
              <div className="card-image-wrapper">
                <img
                  src={image.src}
                  className={"card-img-top " + imgClassName}
                  alt={image.alt ? image.alt : ""}
                />
              </div>
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text mb-1 h5">
                  {image.alt ? image.alt : ""}
                </p>
                {image.description && (
                  <p className="card-text">
                    {image.description ? image.description : ""}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
