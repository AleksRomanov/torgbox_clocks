import * as React from 'react';

export default class Clock extends React.Component {
  clockInterval = '';

  constructor(props) {
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.state = {
      hours: '',
      minutes: '',
      seconds: '',
    };
  }

  componentDidMount(): boolean {
    this.clockInterval = setInterval(this.handleDate, 1000);
  }

  componentWillUnmount(): boolean {
    clearInterval(this.clockInterval);
  }

  render(): void {
    const {hours, minutes, seconds} = this.state;
    const secondsStyle = {
      transform: `rotate(${seconds * 6}deg)`,
    };
    const minutesStyle = {
      transform: `rotate(${minutes * 6}deg)`,
    };
    const hoursStyle = {
      transform: `rotate(${hours * 30}deg)`,
    };
    const title = this.props;
    return (
      <div className={'clock'}>
        <h3>{title}</h3>
        <div className={'analog-clock'}>
          <div className={'dial seconds'} style={secondsStyle}/>
          <div className={'dial minutes'} style={minutesStyle}/>
          <div className={'dial hours'} style={hoursStyle}/>
        </div>
        <div className={'digital-clock'}>
          {hours}:{minutes}:{seconds}
        </div>
      </div>
    );
  }

  handleDate(): void {
    const {dateDiff} = this;
    const date = new Date();
    date.setHours(date.getHours() + dateDiff);
    const hours = this.formatTime(date.getHours());
    const minutes = this.formatTime(date.getMinutes());
    const seconds = this.formatTime(date.getSeconds());
    this.setState({hours, minutes, seconds});
  }

  formatTime(time: number): number {
    return time < 10 ? `0${time}` : time;
  }
}

// import React from 'react';
// import Clock from '../lib/clock-react/src/clock/Clock';
//
// function Main(): JSX.Element {
//   return (
//     <Clock/>
//   );
// }
//
// export default Main;
