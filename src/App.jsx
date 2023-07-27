import React, { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showAboutUs, setShowAboutUs] = useState(false); // Estado para controlar la visibilidad de la sección "Nosotros"

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSearch = (searchTerm) => {
    // Aquí puedes realizar la lógica de búsqueda según el término ingresado.
    // Por ahora, simplemente estableceremos los resultados de búsqueda en un array vacío.
    setSearchResults([]);
  };

  const handleAboutUsClick = () => {
    setShowAboutUs(true);
  };

  return (
    <>
      <div className="App">
        {/* Header */}
        <Header />

        {/* Body*/}
        <Body />

        {/* Footer*/}
        <Footer />
      </div>
    </>
  );
}

export default App;
