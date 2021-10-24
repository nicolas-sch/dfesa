import React from 'react';
import '../styles/scss/main.css';
import Big1 from '../assets/Big_Image1_desk.png';
import Big2 from '../assets/Big_Image2_desk.png';
import Big3 from '../assets/Big_Image3_desk.png';
import BGEstruturas from '../assets/BG_estruturas_desk.png';
import Zoom from 'react-reveal/Zoom';

export class BigNumbers extends React.Component {

  render() {
    return (
      <div>
        <section className="big">
            <div className="big_layer"></div>
            <div className="big_bg">
                <img src={BGEstruturas} alt="BG Estruturas"/>
            </div>

            <div className="big_container1">
                <div className="big_text">
                    <h4>Estruturas Principais</h4>
                </div>
                <div className="big_cards">
                    <div className="card">
                        <div className="big_card_image">
                            <Zoom>
                            <img src={Big1} alt="Big Numbers 1" />
                            </Zoom>
                        </div>
                        <div className="big_card_text">
                            <h5>Casa de força</h5>
                        </div>
                    </div>
                    <div className="card">
                        <div className="big_card_image">
                            <Zoom>
                            <img src={Big2} alt="Big Numbers 2" />
                            </Zoom>
                        </div>
                        <div className="big_card_text">
                            <h5>Barragem</h5>
                            <p>Tomada d'Água e o Vertedouro</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="big_card_image">
                            <Zoom>
                            <img src={Big3} alt="Big Numbers 3" />
                            </Zoom>
                        </div>
                        <div className="big_card_text">
                            <h5>Subestação</h5>
                        </div>
                    </div>
                </div>
                
                <div className="potenci_container">
                    <div className="potenci_title">
                        <h3>Potência Instalada de 125 MW</h3>
                    </div>
                    <div className="potenci_box">
                        <div className="potenci_numbers">
                            <h5>75.9<span>MW</span></h5>
                            <p>Energia assegurada (média)</p>
                        </div>
                        <div className="potenci_numbers">
                            <h5>38,15<span>m</span></h5>
                            <p>Queda líquida<br></br><br></br></p>
                        </div>
                        <div className="potenci_numbers">
                            <h5>664.884<span>MWh</span></h5>
                            <p>Energia assegurada (anual)</p>
                        </div>
                        <div className="potenci_numbers">
                            <h5>2</h5>
                            <p>Unidades geradoras<br></br><br></br></p>
                        </div>
                    </div>
                    <div className="potenci_footer">
                        <p>Abastece uma cidade com o equivalente a 350 mil habitantes.</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default BigNumbers;