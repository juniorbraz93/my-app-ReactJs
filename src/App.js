import React, { Component } from "react";

import Membro from './components/Membro'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hora: '00:00:00'
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({hora: new Date().toLocaleTimeString()})
    }, 1000);
  }

  render() {
    return (
     <div>
      <h1>My Project {this.state.hora}</h1>
      <Membro name='Visitante' />
     </div>
    )
  }
}

export default App