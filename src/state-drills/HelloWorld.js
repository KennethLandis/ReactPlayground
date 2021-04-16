import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = { who: 'world'}
      }
      handleButtonClick = (e) => {
          let target = e.target.value;
          console.log(e.target.value)
        this.setState({ who: target })
      }
      render() {
        return (
          <div>
            <p>Hello, {this.state.who}</p>
            <button value="world"  onClick={this.handleButtonClick}>world</button>
            <button value ="Friend" onClick={this.handleButtonClick}>friend</button>
            <button value="React" onClick={this.handleButtonClick}>react</button>
          </div>
        )
        }
    }
export default HelloWorld;