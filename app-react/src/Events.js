import React, { Component }from "react";

export default class Events extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: 0
        }
        this.clickMethod = this.clickMethod.bind(this); // refenreciando o contexto para nao referenciar no button a parte comentada 
    }

    clickMethod() {
        console.log('--- CLICK METHOD BEGIN ---');
        this.setState({
            clicked: this.state.clicked + 1
        });
        console.log(this.state.clicked)
        console.log('--- CLICK METHOD END ---');
        
    }

    // clickMethod = () => {      //metodo iron function não precisa do "this.clickMethod = this.clickMethod.bind(this);"
    //     console.log('--- CLICK METHOD BEGIN ---');
    //     this.setState({
    //         clicked: this.state.clicked + 1
    //     });
    //     console.log(this.state.clicked)
    //     console.log('--- CLICK METHOD END ---');
        
    // }


    render() {
        return (
            <div>
                <button onClick={this.clickMethod} type="button">Click Here</button>
            </div>
        // <div>
        //      <button onClick={this.clickMethod.bind(this)} type="button">Click Here</button> referenciando o contexto 
        //  </div>
        )
    }
}
