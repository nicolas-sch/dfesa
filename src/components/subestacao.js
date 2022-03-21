import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import BGSubestacao from '../assets/BG_subestacao_desk.webp';

export class Subestacao extends React.Component {

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
          <section className="subestacao">
            <div className="subestacao_layer"></div>
            <div className="subestacao_bg">
              <img src={BGSubestacao} alt="BG Subestacao" />
            </div>

            <div className="subestacao_container">
              <div className="subestacao_title">
                <h3>Subestação</h3>
                <p>Tipo: Aberta e Conexão: Subestação Dona Francisca</p>
              </div>

              <div className="subestacao_box">
                <div className="subestacao_numbers">
                  <h5>{home.subestacaoNumber1}<span>MVA</span></h5>
                  <p>Transformador</p>
                </div>
                <div className="subestacao_numbers">
                  <h5>{home.subestacaoNumber2}<span>kV</span></h5>
                  <p>Altura</p>
                </div>
                <div className="subestacao_numbers">
                  <h5>{home.subestacaoNumber3}<span>m</span></h5>
                  <p>Linhas</p>
                </div>
              </div>
            </div>

          </section>
        ))}

      </div>
    );
  }
}

export default Subestacao;