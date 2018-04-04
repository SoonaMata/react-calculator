import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './App.css';


const DisplayWindow = (props) => (<input type='text' value={props.expression} disabled='true'/>);

class Button extends React.Component {
  constructor() {
    super();
    
    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    this.props.onKeyPressed(this.props.text);
  }
  
  render() {
    return <button onClick={this.onClick}>{this.props.text}</button>;
  }
}

class Calculator extends React.Component {
  constructor () {
    super();
    
    this.state = {
      expression: '0'
    }
    
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.onEvaluatePressed = this.onEvaluatePressed.bind(this);
    this.onDeletePressed = this.onDeletePressed.bind(this);
  }
  
  onKeyPressed(text) {
    this.setState((prev) => ({expression: prev.expression + text}));
  }
  
  onEvaluatePressed() {
    const result = eval(this.state.expression);
    this.setState({expression: result.toString()});
  }
  
  onDeletePressed() {
    this.setState((prev) => ({
      expression: prev.expression.length <= 1 ? '0' : prev.expression.slice(0, -1)}));
  }



  render() {
    let numberKeys = [];
    for(let i =0; i < 10; i++) {
      if ( (i+1) % 4 === 0) {
      	numberKeys.push(<div> <Button text={i}  onKeyPressed={this.onKeyPressed} /> <br/> </div>);
      	
      }else{
      numberKeys.push(<Button text={i}  onKeyPressed={this.onKeyPressed} />);
  	}
    }
    
    return (
      <div>
        <DisplayWindow expression={this.state.expression}/>
        <br/>
        {numberKeys}
        <Button text="+" onKeyPressed={this.onKeyPressed}/>
        <br/>
        <Button text="-" onKeyPressed={this.onKeyPressed}/>

        <Button text="*" onKeyPressed={this.onKeyPressed}/>

        <Button text="/" onKeyPressed={this.onKeyPressed}/>

        <Button text="C" onKeyPressed={this.onDeletePressed}/>

        <button onClick={this.onEvaluatePressed}>=</button>
      </div>
    )
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));



// iN THIS CONSTRUCTOR WE'LL CREATE A NEW  OBJECT AND WE'LL add a new constructor .
// PROPS are the buttons
// this.state=constructor
// another key w/the value 