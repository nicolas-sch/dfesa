import React, { Fragment } from "react";
import Faq from "react-faq-component";
import data from "./data";

export default function App() {
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
