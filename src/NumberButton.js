import React, { Component } from 'react';
import './NumberButton.scss';
class NumberButton extends Component{
    constructor(props){
        super(props)
        this.state = {
            pressed: false,
        }
        this.setPressed = this.setPressed.bind(this);
    }

    componentDidMount(){
        window.addEventListener('onclick', this.props.handleClick);
    }

    setPressed(){
        this.setState({pressed: true});
        setTimeout(() => {
            this.setState({pressed: false});
        }, 100);
    }

    render(){
        return (
            <div id="button-container" className={`pressed-${this.state.pressed} ${this.props.number} ${this.props.number == "=" && "eq"}`} onClick={() => {
                this.props.handleClickNumber(this.props.number);
                this.setPressed();
            }}>
                <p>{this.props.number}</p>
            </div>
        )
    }
}

export default NumberButton;