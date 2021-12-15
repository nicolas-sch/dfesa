import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import Big1 from '../assets/Big_Image1_desk.webp';
import Big2 from '../assets/Big_Image2_desk.webp';
import Big3 from '../assets/Big_Image3_desk.webp';
import BGEstruturas from '../assets/BG_estruturas_desk.webp';
import Zoom from 'react-reveal/Zoom';

export class BigNumbers extends React.Component {
    state = {
        homes: [],
        error: null,
    };
        
    componentDidMount = async () => {
        try {
            const response = await axios.get('http://localhost:1337/homes');
            this.setState({ homes: response.data });
        } catch (error) {
            this.setState({ error });
        }
    };

  render() {
    const { error, home } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <div>
        {this.state.homes.map(home => (
            <section className="big">
                <div className="big_layer"></div>
                <div className="big_bg">
                    <img src={BGEstruturas} alt="BG Estruturas"/>
                </div>
    
                <div className="big_container1">
                    <div className="big_text">
                        <h4>Estruturas principais</h4>
                    </div>
                    <div className="big_cards">
                        <div className="card">
                            <div className="big_card_image">
                                <Zoom>
                                <img src={Big1} alt="Big Numbers 1" />
                                </Zoom>
                            </div>
                            <div className="big_card_text">
                                <h5>{home.estruturasTitulo1}</h5>
                                <p>Onde há a turbina e o gerador</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="big_card_image">
                                <Zoom>
                                <img src={Big2} alt="Big Numbers 2" />
                                </Zoom>
                            </div>
                            <div className="big_card_text">
                                <h5>{home.estruturasTitulo2}</h5>
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
                                <h5>{home.estruturasTitulo3}</h5>
                                <p>Onde a potência é convertida e a energia distribuída</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="potenci_container">
                        <div className="potenci_title">
                            <h3>Potência instalada de 125 MW</h3>
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
                            <p>Energia capaz de abastecer uma cidade com 350 mil habitantes</p>
                        </div>
                    </div>
                </div>
            </section>
        ))}  
      </div>
    );
  }
}

export default BigNumbers;