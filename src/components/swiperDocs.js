import React, { Component, useRef } from "react";
import '../styles/scss/main.css';
import ImageDoc from "../assets/Card_doc1.webp"
import ImageDoc2 from "../assets/ImageDoc2.png"


function Carousel() {
  const carousel = useRef(null);
  
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 316;
  }
  
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 316;
  }
  
  
  
  return (
    <div className="container">
      <div className="logo">
      </div>
      <div className="carousel" ref={carousel}>
        <div className="item">
          <div className="image">
            <img src={ImageDoc} alt="image doc" />
          </div>
          <div className="info">
            <span className="name"> 
              Código de Ética &
              Conduta Gerdau
            </span>
            <a href="../assets/Contatos_externos.pdf" download>Download</a>
          </div>
        </div>
        
        <div className="item">
          <div className="image">
            <img src={ImageDoc2} alt="image doc" />
          </div>
          <div className="info">
            <span className="name">
              Demonstrações Financeiras da Companhia
            </span>
            <a href="../assets/DFRANCISCA_Dfsbal2021.pdf" download>Download</a>
          </div>
        </div>
        
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button onClick={handleRightClick}>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Carousel;