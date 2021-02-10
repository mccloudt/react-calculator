import React, {Component} from 'react';
import './Calculator.scss';
import NumberButton from './NumberButton';
import NumberDisplay from './NumberDisplay';
const numbers = ['1','2','3','4','5','6','7','8','9','0'];

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            mathString: [],
            currentNumberString: '',
            fullString: '',
            answered: false,
            answer: '',
        }
        this.handleClickNumber = this.handleClickNumber.bind(this);
    }


    handleClickNumber(e){
        if(this.state.answered){
            if(!parseInt(e)){
                this.setState({
                    fullString: this.state.answer + e,
                    currentNumberString: this.state.answer + e,
                    answered: false,
                })
            }
            else{
                this.setState({
                    fullString: e,
                    currentNumberString: e,
                    answered: false,
                })
            }
        }

        switch(e){
            case 'C': 
                this.setState(
                    {
                        currentNumberString: '',
                        fullString: '',
                    });
                break;
            case '=':
                this.setState(
                    {
                        currentNumberString: eval(this.state.currentNumberString),
                        fullString: this.state.fullString + "=" +  eval(this.state.currentNumberString),
                        answered: true,
                        answer: eval(this.state.currentNumberString)
                    });
                break;
            default:
                if(!this.state.answered){
                    this.setState({currentNumberString: this.state.currentNumberString + e});
                    this.setState({fullString: this.state.fullString + e});
                }
                break;
        }
        console.log(this.state.fullString);
    }

    render(){
        const numButtons = numbers.map(x => {
            return <NumberButton key={x} number={x} handleClickNumber={this.handleClickNumber}/>
        })
        return (
            <div id="main-container">
                <div id="calculator-container">
                    <p id="heading">CALCI-O</p>
                    <NumberDisplay mathOpString={this.state.currentNumberString} fullString={this.state.fullString}/>
                    <div id='op-container'>
                        <div id='top-row'>
                            <NumberButton number="C" handleClickNumber={this.handleClickNumber} />
                            <NumberButton number="+" handleClickNumber={this.handleClickNumber} />
                            <NumberButton number="/" handleClickNumber={this.handleClickNumber} />
                            <NumberButton number="*" handleClickNumber={this.handleClickNumber} />
                        </div>
                        <div id="bottom-buttons">
                            <div id="number-buttons">
                                {numButtons}
                            </div>
                            <div id="right-op-buttons">
                                <NumberButton number="=" handleClickNumber={this.handleClickNumber}/>
                            </div>
                        </div>
    
                    </div>

                </div>

            </div>

        )
    }
}

export default Calculator;