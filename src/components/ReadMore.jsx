import React, { useState } from "react";
import Button from "./Button";
import "./ReadMore.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="text">
      <div className={`read-more-text ${isReadMore ? "" : "full-text"}`}>
        {text}
      </div>
      <div className="text-center">
          <Button type={"button"} onClick={toggleReadMore} className="btn btn-primary my-4">
            {isReadMore ? "Leer mas" : " Mostrar menos"}
          </Button>
      </div>
    </div>
  );
};

export default ReadMore;
