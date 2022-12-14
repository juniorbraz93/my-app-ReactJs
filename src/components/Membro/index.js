import React, {Component} from 'react';

class Membro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name
    }
    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)
  }

  entrar() {
    this.setState({name: 'Junior Braz'})
  }

  sair() {
    this.setState({name: 'Visitante'})
  }
 render() {
  return (
    <div>
      <h2> Bem-vindo(a) {this.state.name}</h2>
      <button onClick={this.entrar} >
        Entrar no Sistema
      </button>
      <a> </a>
      <button onClick={this.sair} >
        Sair
      </button>
    </div>
  );
 }
}

export default Membro