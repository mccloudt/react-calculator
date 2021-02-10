import React, { Component } from  'react';

class OperationButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id='button-container'>
                <p>{this.props.operation}</p>
            </div>
        )
    }
}

export default OperationButton;