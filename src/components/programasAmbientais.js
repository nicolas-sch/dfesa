import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import BGBloco1 from '../assets/BG_Programas_bloco1_desk.webp';
import BGBloco3 from '../assets/BG_Programas_bloco3_desk.webp';

export class ProgramasAmbientais extends React.Component {
    state = {
        sustentabilidades: [],
        error: null,
      };
      
      
      componentDidMount = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/sustentabilidade-e-desenvolvimentos`);
          this.setState({ sustentabilidades: response.data });
        } catch (error) {
          this.setState({ error });
        }
      };

  render() {
    const { error, sustentabilidade} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <div>
        {this.state.sustentabilidades.map(sustentabilidade => (
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
                                <h2>Programas ambientais</h2>
                                <h3>{sustentabilidade.programas1titulo}</h3>
                                <p>{sustentabilidade.programas1texto1}</p>
                                <p>{sustentabilidade.programas1texto2}</p>
                            </div>
                        </div>
                        <div className="programasAmbientais_bloco2">
                            <div className="programasAmbientais_text_bloco2">
                                <h3>{sustentabilidade.programas2titulo}</h3>
                                <p>{sustentabilidade.programas2texto1}</p>
                                <p>{sustentabilidade.programas2texto2}</p>
                            </div>
                        </div>
                        <div className="programasAmbientais_bloco1">
                            <div className="programasAmbientais_text_bloco1">
                                <h3>{sustentabilidade.programas3titulo}</h3>
                                <p>{sustentabilidade.programas3texto1}</p>
                                <p>{sustentabilidade.programas3texto2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ))}
        
      </div>
    );
  }
}

export default ProgramasAmbientais;