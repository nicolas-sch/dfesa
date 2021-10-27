import React from 'react';
import '../styles/scss/main.css';
import BGBloco1 from '../assets/BG_Programas_bloco1_desk.webp';
import BGBloco3 from '../assets/BG_Programas_bloco3_desk.webp';

export class ProgramasAmbientais extends React.Component {

  render() {
    return (
      <div>
        <section className="programasAmbientais">
            <div className="programas_layer"></div>
            <div className="programas_bg1">
                <img src={BGBloco1} alt="BG Programas1"/>
            </div>
            <div className="programas_bg2">
                <img src={BGBloco3} alt="BG Programas2"/>
            </div>

            <div className="programasAmbientais_container">
                <div className="programasAmbientais_box">
                    <div className="programasAmbientais_bloco1">
                        <div className="programasAmbientais_text_bloco1">
                            <h2>Programas Ambientais</h2>
                            <h3>
                                Monitoramento Limnológico e da Qualidade de Água
                            </h3>
                            <p>
                                Realizamos análises químicas em amostras de água e de efluentes 
                                coletadas na usina, com o objetivo de monitorar resíduos e contaminantes, 
                                como estabelecem as normas municipais, estaduais e federais. Contamos com 
                                um laboratório e um corpo técnico de reagentes, materiais e equipamentos adequados, 
                                além de métodos analíticos desenvolvidos e validados por nós, para realizar essas 
                                análises. Tudo isso acontece sob um rígido sistema de gestão de qualidade, guiado 
                                por normas internacionais e periodicamente auditado por órgãos reguladores.
                                <br></br><br></br>
                                Dessa forma, além de nos mantermos em dia com a legislação, podemos fazer o diagnóstico 
                                rápido de qualquer situação fora da normalidade, como possíveis contaminações ou 
                                impurezas presentes na água. Assim, a tomada de decisões é acelerada, o que possibilita 
                                mitigar qualquer problema dessa natureza.
                            </p>
                        </div>
                    </div>
                    <div className="programasAmbientais_bloco2">
                        <div className="programasAmbientais_text_bloco2">
                            <h3>
                                Monitoramento Hidrossedimentológico
                            </h3>
                            <p>
                                Realizamos constantemente este serviço na Usina de Dona Francisca, a partir do monitoramento 
                                das variáveis hidrológicas (precipitação, nível e vazão) dos sedimentos de fundo e em suspensão. 
                                Essa iniciativa acontece nos rios e arroios tributários do Rio Jacuí, a exemplo do Rio Jacuizinho 
                                e do Arroio Carijinho, e junto ao barramento da UHE.
                                <br></br><br></br>
                                Os dados gerados nas estações fluviométricas e pluviométricas, cuja quantidade obedece os critérios 
                                da Resolução Conjunta ANEEL/ANA nº 03 de 2010, são transmitidos por telemetria, de hora em hora, 
                                para uma plataforma digital. Depois de processados, os dados são retransmitidos para a Agência 
                                Nacional de Águas (ANA), onde também são armazenados. Uma vez por trimestre, realizamos os seguintes 
                                testes: medição de vazão líquida; levantamento de amostras de sedimentos em suspensão e de fundo; 
                                levantamento de perfis topobatimétricos; limpeza de pluviômetros;) manutenção e ajustes nas estações; 
                                entre outros.
                            </p>
                        </div>
                    </div>
                    <div className="programasAmbientais_bloco1">
                        <div className="programasAmbientais_text_bloco1">
                           <h3>
                                Educação Ambiental
                            </h3>
                            <p>
                                Essa iniciativa tem por objetivo proporcionar novos conhecimentos e desenvolver atitudes necessárias à 
                                conservação da natureza e à melhoria da qualidade ambiental das comunidades. Por meio do Programa de    
                                Educação Ambiental (PEA), a DFESA interage com as comunidades da sua área de influência, que compreende 
                                os municípios de Ibarama, Estrela Velha, Pinhal Grande, Nova Palma, Agudo e Arroio do Tigre, no estado 
                                do Rio Grande do Sul.
                                <br></br><br></br>
                                Em parceria com as Secretarias de Educação das municipalidades, promovemos a consciência ambiental entre 
                                o público escolar há mais de 6 anos. Levamos temas ambientais para discussão em sala de aula e também 
                                realizamos atividades educativas.
                            </p>
                        </div>
                    </div>
                </div>
           </div>
        </section>
      </div>
    );
  }
}

export default ProgramasAmbientais;