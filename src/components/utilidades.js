import React from 'react';
import '../styles/scss/main.css';
import UtilidadesImage1 from '../assets/utilidades_image1_desk.png';
import UtilidadesImage2 from '../assets/utilidades_image2_desk.png';
import UtilidadesImage3 from '../assets/utilidades_image3_desk.png';
import UtilidadesImage4 from '../assets/utilidades_image4_desk.png';
import VectorUtilidades from '../assets/Vector_Utilidades_desk.png';

export class Utilidades extends React.Component {

  render() {
    return (
      <div>
        <section className="utilidades">
            <div className="utilidades_layer">
                <img src={VectorUtilidades} alt="Vector Utilidades" />
            </div>
            <div className="utilidades_container">
                <div className="utilidades_title">
                    <h3>Quer saber como é construída e como funciona uma UHE?</h3>
                    <h4>Utilidades</h4>
                </div>
                <div className="utilidades_box">
                    <div className="utilidades_text">
                        <p>
                            A energia hidrelétrica tem como base o aproveitamento hidráulico de um rio, 
                            que consiste na relação entre o seu volume de água e o tamanho da queda que 
                            ele pode proporcionar.
                            <br></br><br></br>
                            Para que o aproveitamento seja alto, é preciso haver um grande desnível no 
                            trecho aproveitado do rio. Neste gráfico, podemos identificar facilmente a 
                            dimensão do aproveitamento hidráulico do trecho inicial do Rio Jacuí, onde a 
                            Dona Francisca está localizada.
                        </p>
                    </div>
                    <div className="utilidades_image">
                        <img src={UtilidadesImage1} alt="Utilidades imagem 1"/>
                    </div>
                </div>
                <div className="utilidades_box">
                    <div className="utilidades_image">
                        <img src={UtilidadesImage2} alt="Utilidades imagem 2"/>
                    </div>
                    <div className="utilidades_text">
                        <p>
                            Num espaço de 300 km, compreendido entre as UHEs de Ernestina e Dona 
                            Francisca, o Rio Jacuí apresenta um desnível de 442 metros. No trecho 
                            mencionado, foram construídas cinco usinas com um potencial de geração total 
                            impressionante, aproximando-se dos 1000 MW quando somados. Esse aglomerado de 
                            energia hidrelétrica poderia abastecer uma cidade de 2 milhões e 800 mil habitantes.
                        </p>
                    </div>
                </div>
                <div className="utilidades_box">
                    <div className="utilidades_text">
                        <p>
                            Para construir nossa UHE, foi necessário criar um desnível através da 
                            construção da barragem. Durante o processo de construção, também é 
                            necessário levantar o maior número de edificações possível nas áreas secas, 
                            para depois desviar o rio e fazê-lo passar por entre as estruturas concretas. 
                        </p>
                    </div>
                    <div className="utilidades_image">
                        <img src={UtilidadesImage3} alt="Utilidades imagem 3"/>
                    </div>
                </div>
                <div className="utilidades_box">
                    <div className="utilidades_image">
                        <img src={UtilidadesImage4} alt="Utilidades imagem 4"/>
                    </div>
                    <div className="utilidades_text">
                        <p>
                            Após a conclusão da obra, tem início o enchimento do lago. No caso da 
                            DFESA - Dona Francisca Energética S.A, essa etapa se estendeu por 12 dias. 
                            Depois de aberta a vazão sanitária, uma parte da água contida na barragem é 
                            despejada no lago.
                            <br></br><br></br>
                            Graças ao desnível formado no local, a água é encaminhada aos condutos 
                            forçados: dois grandes tubos de 6,5 metros de diâmetro, responsáveis por 
                            levar a água para a turbina.
                            <br></br><br></br>
                            Quando há excesso de água no reservatório, ela transborda pelo vertedouro. 
                            Apesar de ser uma cena muito bonita e comum quando se fala em usinas 
                            hidrelétricas, ela significa perda de geração. Isso, que pode ser observado 
                            na imagem abaixo,  não é vantajoso, pois representa uma quantidade de água 
                            que não passa pelas turbinas. Logo, de água que não gera energia.
                         </p>
                    </div>
                </div>
                <div className="utilidades_text_bottom">
                    <p>
                        Depois de acionadas, as turbinas se conectam, com o auxílio de um eixo, ao 
                        gerador de energia. Graças a uma peça que funciona como imã, o rotor magnetizado, 
                        a rotação em velocidade controlada se inicia, sendo o ponto de partida para a 
                        produção de energia elétrica no gerador.
                        <br></br><br></br>
                        A subestação interligada ao Sistema Brasileiro é o que permite levar a energia para 
                        locais geralmente muito distantes. Lá, a tensão de geração é elevada e, por isso, 
                        pode ser utilizada em qualquer lugar do Brasil.
                        <br></br><br></br>
                        A energia gerada a partir de UHEs é limpa e renovável. Não é diferente aqui na 
                        DFESA - Dona Francisca Energética S.A, e, com isso, contribuímos para um ambiente 
                        cada vez mais sustentável.
                    </p>
                </div>

            </div>
        </section>
        
      </div>
    );
  }
}

export default Utilidades;