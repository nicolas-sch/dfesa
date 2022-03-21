import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import BGVertedouro from '../assets/BG_Vertedouro_desk.webp';

export class Vertedouro extends React.Component {

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
          <section className="vertedouro">
            <div className="vertedouro_layer"></div>
            <div className="vertedouro_bg">
              <img src={BGVertedouro} alt="BG Vertedouro" />
            </div>
            <div className="vertedouro_container">
              <div className="vertedouro_title">
                <h3>Vertedouro</h3>
                <p>Tipo de soleira: Livre</p>
              </div>

              <div className="vertedouro_box">
                <div className="vertedouro_numbers">
                  <h5>{home.vertedouroNumber1}<span>m</span></h5>
                  <p>Nível Máximo Maximorum</p>
                </div>
                <div className="vertedouro_numbers">
                  <h5>{home.vertedouroNumber2}<span>m</span></h5>
                  <p>Nível Máximo Normal</p>
                </div>
                <div className="vertedouro_numbers">
                  <h5>{home.vertedouroNumber3}<span>m³/s</span></h5>
                  <p>Vazão Máxima</p>
                </div>
              </div>
            </div>
          </section>
        ))}

      </div>
    );
  }
}

export default Vertedouro;