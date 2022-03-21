import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import BGCasa from '../assets/BG_casa_desk.webp';

export class Casa extends React.Component {

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
                    <section className="casa">
                        <div className="casa_layer"></div>
                        <div className="casa_bg">
                            <img src={BGCasa} alt="BG Barragem" />
                        </div>

                        <div className="casa_container">
                            <div className="casa_title">
                                <h3>Casa de força</h3>
                                <p>Tipo: Abrigada</p>
                            </div>

                            <div className="casa_box_master">
                                <div className="casa_box">
                                    <div className="casa_box_title">
                                        <h4>Turbina 2 x Francis eixo vertical com</h4>
                                    </div>
                                    <div className="casa_wrapper">
                                        <div className="casa_numbers">
                                            <h5>{home.casaForcaNumber1}<span>MW</span></h5>
                                            <p>Potência</p>
                                        </div>
                                        <div className="casa_numbers">
                                            <h5>{home.casaForcaNumber2}<span>m³/s</span></h5>
                                            <p>Vazão</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="casa_box">
                                    <div className="casa_box_title">
                                        <h4>Gerador GE com</h4>
                                    </div>
                                    <div className="casa_wrapper">
                                        <div className="casa_numbers">
                                            <h5>{home.casaForcaNumber3}<span>MW</span></h5>
                                            <p>Potência</p>
                                        </div>
                                        <div className="casa_numbers">
                                            <h5>{home.casaForcaNumber4}<span>rpm</span></h5>
                                            <p>Rotação</p>
                                        </div>
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

export default Casa;