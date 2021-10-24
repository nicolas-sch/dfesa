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
                    <p>É realizada em regime de 24 horas, com a divisão de colaboradores por turnos. A equipe é composta por funcionários que se dividem entre atuação operacional (mantenedores, operadores e chefes de usina), limpeza, segurança, administração e direção da empresa.</p>
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