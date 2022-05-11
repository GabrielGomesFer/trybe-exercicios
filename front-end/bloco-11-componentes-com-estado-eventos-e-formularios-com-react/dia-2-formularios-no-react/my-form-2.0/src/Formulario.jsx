import React, {Component} from "react";

class Formulario extends React.Component {
    


    // this.handleEmailChange = this.handleEmailChange.bind();


  

  handlChange =(e) => {
      const { name, value } = e.target;
      this.setState({[name]: value})
  }


  render() {
      const { resetForm, sendForm } = this.props;
        return (
            <div>
                <h1>Formulario Teste</h1>
                <form className="form">
                    <label className="input-data">
                        Nome
                        <input name="name" type="text" onChange={this.handlChange} />
                    </label>
                    <br />
                    <br />
                    <label className="input-data">
                        Email
                        <input name="email" type="email" onChange={this.handlChange} />
                    </label>
                    <br />
                    <br />
                    <label className="input-data">
                        CPF
                        <input name="cpf" type="numbers" maxLength={'11'} onChange={this.handlChange} />
                    </label>
                    <br />
                    <br />
                    <label className="input-data">
                        Endereço
                        <input name="email" type="email" maxLength={'200'} onChange={this.handlChange} />
                    </label>
                    <br />
                    <br />
                    <label className="input-data">
                        Cidade
                        <input name="cidade" type="text" maxLength={28} onBlur={''} onChange={this.handlChange} />
                    </label>
                    <br />
                    <br />
                    <label className="input-data">
                        Estado
                        <select name="estado" id="" onChange={this.handlChange}>
                            <option value={undefined} ></option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="São Paulo">São Paulo</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <label className="input-data">
                        Tipo <br />
                        <input name="tipo" type="radio" value="Casa" onChange={this.handlChange} />Casa
                        <input name="tipo" type="radio" value="Predio" onChange={this.handlChange} />Predio
                    </label>
                    <br />
                    <br />
                <button onClick={resetForm}>Limpar</button>
                <button onClick={sendForm}>Enviar</button>
                </form>
            </div>
        )
    }
}

export default Formulario;