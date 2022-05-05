// import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas =  ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar', 'Descansar'];

class App extends React.Component {
  render(){
  return (
    <div>
        <h1>EXERCICIO REACT</h1>      
        <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
    </div>
  );
}
}

export default App;
