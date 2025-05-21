import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="Navbar">
        <a href="#">
          <i className="fas fa-home"></i>
          <span>Inicio</span>
        </a>
        <a href="#">
          <i className="fas fa-user"></i>
          <span>Sobre mi</span>
        </a>
        <a href="#">
          <i className="fas fa-envelope"></i>
          <span>Contacto</span>
        </a>
        
      </div>

      <div className="Main">
        <h1>Welcome to my Portfolio!</h1>
        <p>This is a placeholder for the main content.</p>
      </div>
      
      <div className="footer">
        <div className="social-links">
          <a href="#">
            <i className="fab fa-facebook smokeBlue"></i>
            <span>Facebook</span>
          </a>
          <a href="#">
            <i className="fab fa-instagram smokePink"></i>
            <span>Instagram</span>
          </a>
          <a href="#">
            <i className="fab brands fa-twitter smokeWhite"></i>
            <span>Twitter</span>
          </a>
        </div>
        
        <span className="copyright">
          © 2025 My Portfolio. All rights reserved.
        </span>
      </div>
    </>
  );
}

export default App;
