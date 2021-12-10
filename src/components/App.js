import React, {Component} from 'react';
import Clock from 'react-clock';

class App extends Component {

  state = {
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0,
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  componentDidMount = () => {
    setInterval(() => {
      this.setClock();
    }, 1000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setClock = () => {
    const currentDate = new Date();
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    this.setState({secondRatio: secondRatio = currentDate.getSeconds() / 60});
    this.setState({minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.setState({hourRatio: hourRatio = (minuteRatio + currentDate.getHours()) / 12});
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const {secondRatio, minuteRatio, hourRatio} = this.state;
    return (
      <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/>
    );
  }
}

export default App;
