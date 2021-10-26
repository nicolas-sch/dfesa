import React, { Component, useRef } from "react";
import Slider from "react-slick";
import '../styles/scss/main.css';
import ImageTime from "../assets/Time_line_image1.png";


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
            <div className="info2_text">
                <div className="carousel_title">
                    <h3>1999</h3>
                </div>

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
        
        <div className="item2">
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


      </div>
    </div>
  );
}

export default CarouselSobre;