import React, {useEffect, useState, Component} from "react";
import '../styles/scss/main.css';
import FormBg from '../assets/BG_form_desk.webp';
import FormVector from '../assets/Vector_form_desk.webp';


const initialState = {
  name: "",
  email: "",
  assunto: "",
  mensagem: "",
  nameError: "",
  emailError: "",
  telefoneError: "",
  assuntoError: "",
  mensagemError: "",
};



export class ValiationForm extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://d335luupugsy2.cloudfront.net/js/loader-scripts/21c3b119-62d7-458b-a2ea-867a3342c0a0-loader.js";
    script.async = true;
    document.body.appendChild(script);
  }
  

  state = initialState;


  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let assuntoError = "";
    let mensagemError = "";

    if (!this.state.name) {
      nameError = "Preencha seu nome.";
    }

    if (this.state.assunto == `Assunto`) {
      assuntoError = "Escolha um assunto.";
    }

    if (!this.state.mensagem) {
      mensagemError = "Preencha sua mensagem.";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Email inválido";
    }

    if (emailError || nameError || assuntoError || mensagemError) {
      this.setState({ emailError, nameError, assuntoError, mensagemError });
      return false;
    }

    return true;
  };


  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);

      alert(`Obrigado, em breve entraremos em contato`)
    }
  };

  render() {
    return (
    <section className="form_page">
        <div className="form_layer"></div>
        <div className="form_bg">
            <img src={FormBg} alt="BG form" />
        </div>
      <form className="form2container" onSubmit={this.handleSubmit}>
        <div className="form-group"> 
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Nome"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label className="form-label">Digite seu nome e sobrenome</label>
          <div className="error-message">
            <p>{this.state.nameError}</p>
          </div>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label className="form-label">Email</label>
          <div className="error-message">
            {this.state.emailError}
          </div>
        </div>
        <div className="selectcamp">
          <select
          name="assunto"
          type="text"
        >
              <option selected="selected">Assunto</option>
              <option name="Assunto" type="text" value="Quero contratar a DFESA">Quero contratar a DFESA</option>
              <option name="Assunto" type="text" value="Contato Administrativo / Financeiro">Contato Administrativo / Financeiro</option>
              <option name="Assunto" type="text" value="Quero fazer parte do time">Quero fazer parte do time</option>
              <option name="Assunto" type="text" value="Contato geral">Contato geral</option>
          </select>
          <div className="error-message">
            {this.state.assuntoError}
          </div>
        </div>
        <div className="form-group1">
          <textarea  
          type="text" 
          placeholder="Mensagem" 
          name="mensagem" 
          className="form-control1"
          onChange={this.handleChange}
          value={this.state.mensagem} 
          />
          <label className="form-label">Mensagem</label>
          <div className="error-message1">
            {this.state.mensagemError}
          </div>
        </div>
        <div className="checkbox-container">
          <div className="form-button">
              <button type="submit" class='f-button f-button-slide-up'>
                  Enviar
              </button>
          </div>
        </div>
      </form>
    </section>
    );
  }
}

export default ValiationForm;