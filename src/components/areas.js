import React from 'react';
import '../styles/scss/main.css';
import VectorAreas from '../assets/Vector_Areas_desk.png';

export class Areas extends React.Component {

  render() {
    return (
      <div>
        <section className="areas">
            <div className="areas_container">
                <div className="areas_text">
                    <h3>Áreas Atingidas</h3>
                    <p>2.098 hectares entre os municípios de Ibarama, Agudo, Nova Palma, Pinhal Grande, Estrela Velha e Arroio do Tigre.</p>
                </div>
                <div className="areas_text">
                    <h3>Operação</h3>
                    <p>É realizada em regime de 24hs, com a divisão de colaboradores por turno. A equipe é multidisciplinar, com atividades de operação, manutenção, segurança, meio ambiente, saúde e serviços administrativos</p>
                </div>
            </div>
            <div className="areas_vector">
              <img src={VectorAreas} alt="Vector areas" />
            </div>
        </section>
      </div>
    );
  }
}

export default Areas;