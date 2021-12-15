import React, { Component, useRef } from "react";
import axios from 'axios';
import '../styles/scss/main.css';
import ImageTime from "../assets/Time_line_image1.webp";


function CarouselSobre() {
  
  
  const carousel = useRef(null);
  
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 606;
  }
  
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 606;
  }
  
  
  
  return (
    <div className="container2">
      <div className="carousel2" ref={carousel}>
        <div className="item2">
            <div className="carousel_title">
                <h3>1998</h3>
            </div>
            <div className="info2">
                <span className="name2">
                Agosto: implantação do canteiro de obras; início das obras.
                </span>
            </div>
            <div className="image2">
                <img src={ImageTime} alt="image time" />
            </div>
        </div>
        
        <div className="item2_text">
            <div className="carousel_title">
                <h3>1999</h3>
            </div>
            <div className="info2_text">
                <div className="name2_text">
                <p>
                    Janeiro: primeira fase do desvio do rio;
                    <br></br>
                    Fevereiro: início das escavações do circuito de geração, da barragem e do vertedouro;
                    <br></br>
                    Maio: início do uso do Concreto Compacto a Rolo (CCR);
                    <br></br>
                    Junho: conclusão das escavações do circuito de geração, da barragem e do vertedouro (margem direita);
                    <br></br>
                    Julho: início da montagem dos condutos forçados e das concretagens da tomada d’água;
                    <br></br>
                    Novembro: segunda fase do desvio do rio;
                    <br></br>
                    Dezembro: início da montagem da turbina Unidade I (pré-distribuidor).
                    </p>
                </div>
            </div>
        </div>
        <div className="item2_text">
            <div className="carousel_title">
                <h3>2000</h3>
            </div>
            <div className="info2_text">
                <div className="name2_text">
                    <p>
                    Março: início da montagem da turbina Unidade II (pré-distribuidor) e do estator da Unidade I.
                    <br></br>
                    Maio: início da montagem do rotor do gerador da Unidade I.
                    <br></br>
                    Novembro: fechamento das adufas de desvio e a consequente formação do reservatório (19 km²).
                    <br></br>
                    </p>
                </div>
            </div>
        </div>
        <div className="item2_text">
            <div className="carousel_title">
                <h3>2001</h3>
            </div>
            <div className="info2_text">
                <div className="name2_text">
                    <p>
                    Fevereiro: início da operação comercial na Unidade I da usina.
                    <br></br>
                    Abril: início da operação comercial na Unidade II da usina.
                    <br></br>
                    Maio: inauguração da DFESA - Dona Francisca Energética S.A.
                    <br></br>
                    </p>
                </div>
            </div>
        </div>
        

      </div>
      <div className="buttons2">
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

export default CarouselSobre;