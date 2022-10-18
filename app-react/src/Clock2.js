import React, { Component } from "react";

export default class Clock2 extends Component{
    constructor(props) {
        super(props)

        this.state = {
            time: new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            })
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => this.updateClock(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    updateClock(){
        this.setState({
            time: new Date().toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
        }),
        name: 'Fernando'
    })
    }

render(){
    const { time } = this.state;
      return(
            <h1>
                {time}
            </h1>
        );
    }
}

// --- Componentes de ciclo de vida 
// ComponentDidMount(){
//     apos sua montagem/ quando o metodo ja ta criado so precisa inicializar 
// }
// ComponentDidUpdate(){
//     apos qualque ralteração/atulização
// }
// ComponentWillMount(){
//     quando esta sendo montado 
// }
// ComponentWillunmount(){
//     quando esta sendo desmontado 
// }
// ComponentWillReceiveProps(){
//     quando ele recebe uma nova props
// }
// componentDidCatch(){
//     quando caputa uma exceção 
// }