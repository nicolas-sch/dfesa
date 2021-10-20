import React from 'react';
import '../styles/scss/main.css';
import VectorDesenvolvimento from '../assets/Vector_desenvolvimento_desk.png';

export class SobreDesenvolvimento extends React.Component {

  render() {
    return (
      <div>
        <section className="sobre_desenvolvimento">
            <div className="vector_desenvolvimento">
                <img src={VectorDesenvolvimento} alt="Vector desenvolvimento" />
            </div>
            <div className="sobre_desenvolvimento_container">
                <div className="sobre_desenvolvimento_title">
                    <h3>
                        Desenvolvimento para a comunidade
                    </h3>
                </div>
                <div className="sobre_desenvolvimento_text">
                    <p>
                        Desde sua construção, o empreendimento trouxe receitas representativas 
                        do Imposto Sobre Serviços de Qualquer Natureza (ISSQN) para os municípios 
                        de Agudo e Nova Palma, no Rio Grande do Sul. A DFESA - Dona Francisca 
                        Energética S.A representa uma das maiores fontes de Imposto sobre Circulação 
                        de Mercadorias e Serviços (ICMS) do município de Nova Palma. A verba 
                        arrecadada permite investimentos na agricultura familiar, a principal 
                        atividade econômica da cidade.
                    </p>
                    <p>
                        A usina hidrelétrica é considerada um dos pontos turísticos mais importantes 
                        de Agudo, atraindo escolas e a população local para passeios. E isso sem falar 
                        no Parque Estadual Quarta Colônia, inaugurado por nós, que também é movimentado. 
                        Além de ser mais um atrativo do município, o parque também é adequado para 
                        pesquisas de faculdades locais.
                    </p>
                    <p>
                        Outras cidades da região que foram impactadas pela formação do reservatório da 
                        usina recebem a Compensação Financeira pela Utilização dos Recursos Hídricos para 
                        Fins de Energia (CFURH).
                    </p>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default SobreDesenvolvimento;