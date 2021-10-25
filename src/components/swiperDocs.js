import React, { Component, useRef } from "react";
import Slider from "react-slick";
import '../styles/scss/main.css';
import ImageDoc from "../assets/Card_doc1.png"


function Carousel() {
  const carousel = useRef(null);
  
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 306;
  }
  
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 306;
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
            <a href="">Download</a>
          </div>
        </div>
        
        <div className="item">
          <div className="image">
            <img src={ImageDoc} alt="image doc" />
          </div>
          <div className="info">
            <span className="name">
              Código de Ética &
              Conduta para terceiros
            </span>
            <a href="">Download</a>
          </div>
        </div>
        
        <div className="item">
          <div className="image">
            <img src={ImageDoc} alt="image doc" />
          </div>
          <div className="info">
            <span className="name">Teste</span>
            <a href="">Download</a>
          </div>
        </div>
        
        <div className="item">
          <div className="image">
            <img src={ImageDoc} alt="image doc" />
          </div>
          <div className="info">
            <span className="name">Documento 3</span>
            <a href="">Download</a>
          </div>
        </div>
        
        <div className="item">
          <div className="image">
            <img src={ImageDoc} alt="image doc" />
          </div>
          <div className="info">
            <span className="name">Documento 4</span>
            <a href="">Download</a>
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