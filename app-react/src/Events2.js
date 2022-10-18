import React, { Component }from "react";

export default class Events2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            data:[]
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        console.log('STATE', this.state);
    }

    insertToData = () => {
        this.state.data.push(this.state.name);
        console.log('DATA', this.state.data);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={ this.handleChange } name="name" id="name" placeholder="Enter your name"/>
                <input type="text" onChange={ this.handleChange } name="age" id="age" placeholder="Enter your age"/>

                <button type="button"  onChange={ this.insertToData } >Enter</button>
            </div>
        )
    }
}
