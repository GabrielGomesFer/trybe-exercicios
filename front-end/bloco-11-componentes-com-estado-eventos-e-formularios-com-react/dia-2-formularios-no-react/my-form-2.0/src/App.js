import React from 'react';
import './App.css';
import Formulario from './Formulario';


 const  initial_State = {
  email: '',
  age: 0,
  name: '',
  cpf: 0,
  endereco: "",
  cidade: "",
  estado: "",
  tipo: "",
  submitted: false,
}

class App extends React.Component {

  resetForm = () => {
    this.setState(initial_State)
}

  sendForm = () => {
    this.setState({submitted: true})
  }

  constructor(props) {
    super(props);
    this.state = initial_State;

  }

  render() {
  return (
    <div>
      <Formulario />
    </div>
  );
}
}

export default App;
