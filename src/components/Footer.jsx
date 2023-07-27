import React from "react";
import NavLinkLogo from "./NavLinkLogo";
import NavButton from "./NavButton";
import "./Footer.css";
import Link from "./Link";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear().toString();
  };
  return (
    <>
      <div className="footer">
        <div className="col-lg-10 offset-lg-1">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <p className="col-md-4 mb-0 text-muted pl-0">
              © {getCurrentYear()}, VG Nails Art Studio
            </p>

            <NavLinkLogo className={""} route={"/"}>
              <img
                className="rounded-circle"
                src="src\assets\logo.ico"
                alt="VG Nails"
                width="24"
                height="24"
              />
            </NavLinkLogo>

            <ul className="nav col-md-4 justify-content-end pr-0">
              <li className="nav-item">
                <Link route={"/"} className={""}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link route={"/nosotros"} className={""}>
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link route={"/servicios"} className={""}>
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link route={"/galeria"} className={""}>
                  Galeria
                </Link>
              </li>
              <li className="nav-item">
                <Link route={"/contacto"} className={""}>
                  Contacto
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
