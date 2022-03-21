import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import BGBarragem from '../assets/BG_Barragem_desk.webp';

export class Barragem extends React.Component {
  state = {
    homes: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/homes`);
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
          <section className="barragem">
            <div className="barragem_layer"></div>
            <div className="barragem_bg">
              <img src={BGBarragem} alt="BG Barragem" />
            </div>
            <div className="barragem_container">
              <div className="barragem_title">
                <h3>Barragem</h3>
                <p>Gravidade em Concreto Compactado a Rolo (CCR)</p>
              </div>

              <div className="barragem_box">
                <div className="barragem_numbers">
                  <h5>{home.barragemNumber1}<span>m</span></h5>
                  <p>Comprimento</p>
                </div>
                <div className="barragem_numbers">
                  <h5>{home.barragemNumber2}<span>m</span></h5>
                  <p>Altura</p>
                </div>
                <div className="barragem_numbers">
                  <h5>{home.barragemNumber3}<span>m³</span></h5>
                  <p>Volume de CCR</p>
                </div>
              </div>
            </div>
          </section>
        ))}

      </div>
    );
  }
}

export default Barragem;