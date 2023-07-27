import React from "react";
import { Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./Inicio";
// import Login from "./Login";
import Nosotros from "./Nosotros";
import Servicios from "./Servicios";
import Galeria from "./Galeria";
import Contacto from "./Contacto";
import "./Body.css";

function Body() {
  return (
    <div className="body">
      <div className="col-lg-10 offset-lg-1 my-4">
        <TransitionGroup>
          <CSSTransition timeout={450} classNames={"fade"}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/contacto" element={<Contacto />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default Body;
