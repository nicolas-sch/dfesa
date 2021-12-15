import React, { Fragment } from "react";
import axios from 'axios';
import Faq from "react-faq-component";
import data from "./data";

export class FaqPerguntas extends React.Component {
  state = {
    faqs: [],
    error: null,
  };
  
  
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/faqs');
      this.setState({ faqs: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    return (
      <Fragment>
          <section className="faq_perguntas">
              <div className="faq_perguntas_container">
                  <div className="faq_perguntas_title">
                      <h3>
                          Perguntas frequentes
                      </h3>
                  </div>
                  <Faq
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
                  />
              </div>
          </section>
  
      </Fragment>
    );
    
  }
  
}
