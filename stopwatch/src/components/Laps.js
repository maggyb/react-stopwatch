import Timer from './Timer';

const React = require('react')

class Laps extends React.Component {
  render() {
    // Loop through the laps and create a li for each one
    const laps = this.props.lapTimes.map((lapTime, index) =>
      <li key={index}>
        Lap {index + 1}: <Timer timeElapsed={lapTime} />
      </li>
    );
    return (
      <ul className="laps" id="lap-times">
        {laps}
      </ul>
    );
  }
}

export default Laps;