// NavigationBar.js
import "bootstrap/js/src/collapse.js";
import React, { useState } from "react";
import BarButton from "./BarButton.jsx";
import NavButton from "./NavButton.jsx";
import SearchBox from "./SearchBox.jsx";
import NavLinkLogo from "./NavLinkLogo.jsx";

const NavigationBar = ({ className }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <nav
        className={
          className +
          " navbar navbar-dark navbar-expand-lg bg-body-tertiary container-fluid"
        }
      >
        <div className="link-logo-wrapper mr-2">
          <NavLinkLogo className={""} route={"/"}>
            <img
              className="rounded-circle"
              src="src\assets\logo.ico"
              alt="VG Nails"
              width="48"
              height="48"
            />
          </NavLinkLogo>
        </div>
        {/* <a className="navbar-brand mx-2" href="/">
            <img
              className="rounded-circle"
              src="src\assets\logo.ico"
              alt="VG Nails"
              width="48"
              height="48"
            />
          </a> */}
        <BarButton onClick={handleToggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </BarButton>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isNavbarOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item ml-lg-2 my-sm-1">
              <NavButton route={"/nosotros"}>{"Nosotros"}</NavButton>
            </li>
            <li className="nav-item ml-lg-2 my-sm-1">
              <NavButton route={"/servicios"}>{"Servicios"}</NavButton>
            </li>
            <li className="nav-item ml-lg-2 my-sm-1">
              <NavButton route={"/galeria"}>{"Galería"}</NavButton>
            </li>
            <li className="nav-item ml-lg-2 my-sm-1">
              <NavButton route={"/contacto"}>{"Contacto"}</NavButton>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
