import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0, bomb: 'tick' };
      }
      componentDidMount() {
          this.interval = setInterval(() => {
              console.log(this.state.count)
            if (this.state.count >= 8) {
                this.setState({
                    bomb: "BOOM!!!!"
                })
            } else if (this.state.count % 2 === 0) {
                this.setState({
                    bomb: "tick"
                })
            } else {
                this.setState({
                    bomb: "tock"
                })
            }
          this.setState({
            count: this.state.count + 1
          })
        }, 1000)
        console.log(this.state.count)
        if (this.state.count >= 8) {
            this.setState({
                bomb: "BOOM!!!!"
            })
        } else if (this.state.count % 2 === 0) {
            this.setState({
                bomb: "tick"
            })
        } else {
            this.setState({
                bomb: "tock"
            })
        }
      }
      componentWillUnmount() {
        clearInterval(this.interval)
      }
      render() {
        return (
          <div>{this.state.bomb}</div>
        )
        }
    }

export default Bomb;