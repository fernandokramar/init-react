import React, { Component } from "react";

export default class Props extends Component{

    constructor(props) {
        // this.props = {
        //     attr: 'VALUE',
        //     attr2: 'VALUE2',
        //     attr3: 'VALUE3'

        // };

        // this.props.attr
        // this.props,attr2
        // this.props,attr3

        super(props)
        const { attr, attr2, attr3 } = this.props;
        console.log(attr, attr2, attr3);
    }

    render(){
        const { attr, attr2, attr3 } = this.props;

        return(
            <div>
                { attr === 'span' ? <p>PROPs</p> : <h1>PROPS</h1> }
            </div>
        );
    }
}
