import Timer from './Timer';
import Laps from './Laps';

const React = require('react')


class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    var localLaps = localStorage.getItem("myData");

    // Set the state & initialState
    this.state = this.initialState = {
      timerRunning: false,
      lapTimes: localLaps != null ? localLaps.split(',') : [],
      timeElapsed: 0,
    };
  }

  toggleTimer = () => {
    this.setState({ timerRunning: !this.state.timerRunning }, () => {
      this.state.timerRunning ? this.startTimer() : clearInterval(this.timer)
    });
  }
  startLap = () => {
    const { lapTimes, timeElapsed } = this.state;
    this.setState({ lapTimes: lapTimes.concat(timeElapsed) });
    localStorage.setItem('myData', lapTimes.concat(timeElapsed));
  }
  resetTime = () => {
    clearInterval(this.timer);
    this.setState({ timeElapsed: 0  });
  }
  startTimer = () => {
    // Using Date.now() seems more efficient than incrementing seconds ourselves
    this.startTime = Date.now();
    // Update timer every 10 milliseconds
    this.timer = setInterval(this.updateTimer, 10);
  }
  updateTimer = () => {
    const time = Date.now() - this.startTime;
    this.setState({ timeElapsed: this.state.timeElapsed + time });
    this.startTime = Date.now();
  }
  resetLaps = () => {
    localStorage.removeItem("myData")
    this.setState({ lapTimes: []  });

  }

  render() {
    // Get our state values
    const { timerRunning, lapTimes, timeElapsed } = this.state;
    return (
      <div>
        <div className="timerContainer">
          <Timer id="timer" timeElapsed={timeElapsed} />
          <button
            className="button"
            onClick={this.toggleTimer}>
            {timerRunning ? "Stop" : "Start"}
          </button>
          <button
            className={!timerRunning && !timeElapsed ? "hide button" : "button"}
            onClick={timerRunning ? this.startLap : this.resetTime}
          >
            {timerRunning || !timeElapsed ? '| Lap' : '| Reset'}
          </button>
        </div>
        <div className="lapContainer">
          <button
              className={lapTimes.length > 0 ? "button-lap" : "hide"}
              onClick={this.resetLaps}
            >
            Clear laps
          </button>
          {lapTimes.length > 0 && <Laps lapTimes={lapTimes} />}
        </div>

      </div>
    );
  }
}

export default Stopwatch