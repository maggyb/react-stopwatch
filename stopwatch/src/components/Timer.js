const React = require('react')


class Timer extends React.Component {
  getUnits() {
    const seconds = this.props.timeElapsed / 1000;
    return {
      hours: Math.floor(seconds / 60).toLocaleString('en-gb', { minimumIntegerDigits: 2, useGrouping: false }),
      minutes: Math.floor(seconds / 60).toLocaleString('en-gb', { minimumIntegerDigits: 2, useGrouping: false }),
      seconds: Math.floor(seconds % 60).toLocaleString('en-gb', { minimumIntegerDigits: 2, useGrouping: false }),
      miliseconds: (seconds % 1).toFixed(3).substring(2)
    };
  }
  render() {
    const units = this.getUnits();
    return (
      <div className="timer">
        <span>{units.hours}:</span>
        <span>{units.minutes}:</span>
        <span>{units.seconds}.</span>
        <span>{units.miliseconds}</span>
      </div>
    );
  }
}
module.exports = Timer