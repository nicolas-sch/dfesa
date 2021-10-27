import React from 'react';
import '../styles/scss/main.css';
import BGSubestacao from '../assets/BG_subestacao_desk.webp';

export class Subestacao extends React.Component {

  render() {
    return (
      <div>
        <section className="subestacao">
          <div className="subestacao_layer"></div>
            <div className="subestacao_bg">
                <img src={BGSubestacao} alt="BG Subestacao"/>
            </div>

            <div className="subestacao_container">
                <div className="subestacao_title">
                    <h3>Subestação</h3>
                    <p>Tipo: Aberta e Conexão: Subestação Dona Francisca</p>
                </div>
                
                <div className="subestacao_box">
                    <div className="subestacao_numbers">
                        <h5>2 x 70<span>MVA</span></h5>
                        <p>Transformador</p>
                    </div>
                    <div className="subestacao_numbers">
                        <h5>13,8 x 230<span>kV</span></h5>
                        <p>Altura</p>
                    </div>
                    <div className="subestacao_numbers">
                        <h5>2 x 700<span>m</span></h5>
                        <p>Linhas</p>
                    </div>
                </div>
            </div>
            
        </section>
      </div>
    );
  }
}

export default Subestacao;