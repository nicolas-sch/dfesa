import React, { Fragment } from "react";
import axios from 'axios';
import Collapsible from 'react-collapsible';
import Chevron from '../assets/chevron-down.png'
export class FaqPerguntas extends React.Component {
  state = {
    faqperguntas: [],
    error: null,
  };
  
  
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/faqperguntas');
      //const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/faqs`);
      this.setState({ faqperguntas: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    const { error, faqpergunta} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <Fragment>
          <section className="faq_perguntas">
              <div className="faq_perguntas_container">
              <div className="faq_perguntas_title">
                <h3>
                    Perguntas frequentes
                </h3>
              </div>

              {this.state.faqperguntas.map(faqpergunta => (
                
                <div className="faq_perguntas_text">
                  <Collapsible trigger={
                    <div className="accordion-pergunta">
                    <h4>{faqpergunta.faqPergunta}</h4>
                    <img src={Chevron} />
                    </div>
                    }>
                  {/* <h4>{faqpergunta.faqPergunta}</h4> */}
                  <p>{faqpergunta.faqResposta}</p>
                  </Collapsible>
                </div>
                
              ))}
                  
                  {/* <Faq
                    data={data}
                    styles={{
                      bgColor: "#161616",
                      rowTitleColor: "#F6F6F6",
                      rowTitleTextSize: "36px",
                      rowContentColor: "#F6F6F6",
                      rowContentTextSize: "16px",
                      rowContentPaddingTop: "10px",
                      rowContentPaddingBottom: "10px",
                      rowContentPaddingLeft: "0px",
                      rowContentPaddingRight: "150px",
                      arrowColor: "#F6F6F6"
                    }}
                    config={{
                      animate: true
                    }}
                  /> */}
              </div>
          </section>
  
      </Fragment>
    );
    
  }
  
}
