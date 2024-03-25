// Write your code here
import './index.css'

import {Component} from 'react'

class Stopwatch extends Component {
  state = {timerState: 'stop', elapsedTime: 0}

  tick = () => {
    this.setState(previousState => ({
      elapsedTime: previousState.elapsedTime + 1,
      timerState: 'running',
    }))
  }

  start = () => {
    const {timerState} = this.state
    if (timerState === 'stop') {
      this.timerID = setInterval(this.tick, 1000)
    }
  }

  stop = () => {
    const {timerState} = this.state
    if (timerState === 'running') {
      clearInterval(this.timerID)
    }
    this.setState({timerState: 'stop'})
  }

  reset = () => {
    const {timerState} = this.state
    if (timerState === 'running') {
      clearInterval(this.timerID)
    }

    this.setState({timerState: 'stop', elapsedTime: 0})
  }

  render() {
    const {elapsedTime} = this.state
    const minutes = Math.floor(elapsedTime / 60)
    const seconds = elapsedTime % 60

    let resMinutes = null
    let resSeconds = null

    if (minutes <= 9) {
      resMinutes = `0${minutes}`
    } else {
      resMinutes = minutes
    }

    if (seconds <= 9) {
      resSeconds = `0${seconds}`
    } else {
      resSeconds = seconds
    }

    return (
      <div className="main">
        <div className="content">
          <h1 className="h1">Stopwatch</h1>
          <div className="card">
            <div className="headingContainer">
              <img
                className="image1"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <h1 className="h2">Timer</h1>
            </div>
            <div className="timerContainer">
              <h1 className="h3">
                {resMinutes}:{resSeconds}
              </h1>
            </div>

            <div className="buttonsContainer">
              <button className="button1" type="button" onClick={this.start}>
                Start
              </button>
              <button className="button2" type="button" onClick={this.stop}>
                Stop
              </button>
              <button className="button3" type="button" onClick={this.reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
