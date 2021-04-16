import React from "react";

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    constructor(props) {
        super(props)
        this.state = { chamber: null, spinningTheChamber: false }
      }

    handleButtonClick = () => {
        this.setState({ spinningTheChamber: true })
        console.log('click')
            setTimeout(() => {
            console.log('start timeout')
            let temp = Math.ceil(Math.random() * 8)
            console.log('temp')
            this.setState({ chamber: temp, spinningTheChamber: false })
            console.log(this.state.chamber)
        }, 2000)
        clearTimeout(this.timeout);
        if (this.state.spinningTheChamber === true) {
          this.setState ({ outcome: "spinning the chamber and pulling the trigger! ..."})
      } else if (this.state.chamber === this.props.bulletInChamber) {
          this.setState ({ outcome: "Bang!!!!"})
      } else {
          this.setState ({ outcome: "you're safe!"})
      }
    }
    render () {
        return (
        <div>
            <p>{this.state.outcome}</p>
            <button onClick={this.handleButtonClick}>Pull the trigger!</button>
        </div>
        )}
}

export default RouletteGun;