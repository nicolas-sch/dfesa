import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
// import AboutDesk from '../assets/About_image_desk.webp';
import VectorAbout from '../assets/Vector_about_home.webp';

export class About extends React.Component {
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
          <section className="about">
            <div className="about_home_layer">
              <img src={VectorAbout} alt="Vector About" />
            </div>
              <div className="about_container">
                  <div className="about_text">
                      <p>
                        {home.aboutText}
                      </p>
                  </div>
                  <div className="about_image">
                    <img src={`${process.env.REACT_APP_BASE_URL}${home.aboutImage.formats.large.url}`} alt="About image" />
                  </div>
              </div>
          </section>
        ))}     
      </div>
    );
  }
}

export default About;