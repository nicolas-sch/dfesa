import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import BGReservatorio from '../assets/BG_Reservatorio_desk.webp';

export class Reservatorio extends React.Component {

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
                    <section className="reservatorio">
                        <div className="reservatorio_layer"></div>
                        <div className="reservatorio_bg">
                            <img src={BGReservatorio} alt="BG Reservatorio" />
                        </div>

                        <div className="reservatorio_container">
                            <div className="reservatorio_title">
                                <h3>Reservatório</h3>
                            </div>

                            <div className="reservatorio_box">
                                <div className="reservatorio_numbers">
                                    <h5>{home.reservatorioNumber1}<span>km²</span></h5>
                                    <p>Comprimento</p>
                                </div>
                                <div className="reservatorio_numbers">
                                    <h5>{home.reservatorioNumber2}<span>m</span></h5>
                                    <p>Nível Máximo Maximorum</p>
                                </div>
                                <div className="reservatorio_numbers">
                                    <h5>{home.reservatorioNumber3}<span>m</span></h5>
                                    <p>Nível Máximo Normal</p>
                                </div>
                                <div className="reservatorio_numbers">
                                    <h5>{home.reservatorioNumber4}<span>m³</span></h5>
                                    <p>Volume</p>
                                </div>
                                <div className="reservatorio_numbers">
                                    <h5>{home.reservatorioNumber5}<span>km</span></h5>
                                    <p>Perímetro <br></br>do lago</p>
                                </div>
                            </div>
                        </div>

                    </section>
                ))}

            </div>
        );
    }
}

export default Reservatorio;