import React from 'react';
import '../styles/scss/main.css';
import Big1 from '../assets/Big_Image1_desk.png';
import Big2 from '../assets/Big_Image2_desk.png';
import Big3 from '../assets/Big_Image3_desk.png';

export class BigNumbers extends React.Component {

  render() {
    return (
      <div>
        <section className="big">
            <div className="big_container1">
                <div className="big_text">
                    <h4>Estruturas Principais</h4>
                </div>
                <div className="big_cards">
                    <div className="card">
                        <div className="big_card_image">
                            <img src={Big1} alt="Big Numbers 1" />
                        </div>
                        <div className="big_card_text">
                            <h5>Casa de força</h5>
                            <p>Hac penatibus donec at id neque at. Convallis...</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="big_card_image">
                            <img src={Big2} alt="Big Numbers 2" />
                        </div>
                        <div className="big_card_text">
                            <h5>Barragem</h5>
                            <p>Hac penatibus donec at id neque at. Convallis...</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="big_card_image">
                            <img src={Big3} alt="Big Numbers 3" />
                        </div>
                        <div className="big_card_text">
                            <h5>Subestação</h5>
                            <p>Hac penatibus donec at id neque at. Convallis...</p>
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
                            <p>Queda líquida</p>
                        </div>
                        <div className="potenci_numbers">
                            <h5>664.884<span>MWh</span></h5>
                            <p>Energia assegurada (anual)</p>
                        </div>
                        <div className="potenci_numbers">
                            <h5>2</h5>
                            <p>Unidades geradoras</p>
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