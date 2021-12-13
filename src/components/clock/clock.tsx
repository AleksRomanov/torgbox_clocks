import dayjs from 'dayjs';

function Clock(): JSX.Element {

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <div style={{margin: '0px auto', width: '100%'}}>
      <h2 style={{textAlign: 'center'}}>Torgbox Clocks</h2>
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        <div style={{margin: '10px', width: 'auto'}}>
          <div style={{color: 'rgb(74, 74, 74)', margin: '10px'}}/>
          <div>
            <div className="picky-date-time visible">
              <svg className="picky-date-time__close" viewBox="0 0 20 20" width="15" height="15">
                <path fill="#868e96"
                  d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"
                />
              </svg>
              <div className="picky-date-time__clock xs">
                <div className="picky-date-time-clock xs">
                  <div className="picky-date-time-clock__circle xs">
                    <div className="picky-date-time-clock__clock-hand picky-date-time-clock__clock-hand--second" style={{transform: 'translate(-1px, -34.5px) rotate(36deg) translate(0px, -22.5px)'}}/>
                    <div className="picky-date-time-clock__clock-hand picky-date-time-clock__clock-hand--minute" style={{transform: 'translate(-1px, -32.5px) rotate(324deg) translate(0px, -20.5px)'}}/>
                    <div className="picky-date-time-clock__clock-hand picky-date-time-clock__clock-hand--hour" style={{transform: 'translate(-2.5px, -17.5px) rotate(60deg) translate(1px, -9.5px)'}}/>
                    <div className="picky-date-time-clock__clock-minute picky-date-time-clock__clock-minute--quarter picky-date-time-clock__clock-minute--five" style={{transform: 'translate(0px, -3px) rotate(180deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(186deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(192deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(198deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(204deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute picky-date-time-clock__clock-minute--five" style={{transform: 'translate(0px, -1px) rotate(210deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(216deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(222deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(228deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(234deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute picky-date-time-clock__clock-minute--five" style={{transform: 'translate(0px, -1px) rotate(240deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(246deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(252deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(258deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(264deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute picky-date-time-clock__clock-minute--quarter picky-date-time-clock__clock-minute--five" style={{transform: 'translate(0px, -3px) rotate(270deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(276deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(282deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(288deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(294deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute picky-date-time-clock__clock-minute--five" style={{transform: 'translate(0px, -1px) rotate(300deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(306deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(312deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(318deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(324deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute picky-date-time-clock__clock-minute--five" style={{transform: 'translate(0px, -1px) rotate(330deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(336deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(342deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(348deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(354deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute picky-date-time-clock__clock-minute--quarter picky-date-time-clock__clock-minute--five" style={{transform: 'translate(0px, -3px) rotate(360deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(366deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(372deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(378deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(384deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute picky-date-time-clock__clock-minute--five" style={{transform: 'translate(0px, -1px) rotate(390deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(396deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(402deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(408deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(414deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute picky-date-time-clock__clock-minute--five" style={{transform: 'translate(0px, -1px) rotate(420deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(426deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(432deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(438deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(444deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute picky-date-time-clock__clock-minute--quarter picky-date-time-clock__clock-minute--five" style={{transform: 'translate(0px, -3px) rotate(450deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(456deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(462deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(468deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(474deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute picky-date-time-clock__clock-minute--five" style={{transform: 'translate(0px, -1px) rotate(480deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(486deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(492deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(498deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(504deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute picky-date-time-clock__clock-minute--five" style={{transform: 'translate(0px, -1px) rotate(510deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(516deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(522deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(528deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-minute" style={{transform: 'translate(0px, -1px) rotate(534deg) translate(0px, 85px)'}}/>
                    <div className="picky-date-time-clock__clock-center"/>
                  </div>
                  <div className="picky-date-time-clock__inputer-wrapper">
                    <div className="picky-date-time-clock__inputer">
                      <input className="picky-date-time-clock__input" value={dayjs()}/>
                    </div>
                    <div className="picky-date-time-clock__inline-div picky-date-time-clock__inline-div--middle">
                      <svg className="picky-date-time-clock__icon picky-date-time-clock__icon--schedule picky-date-time-schedule" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 24 24" width="15" style={{verticalAlign: 'middle'}}>
                        <path fill="#868e96" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path fill="#868e96" d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

  //
  // {/*      <div style={{margin: '0 auto', width: '100%'}}>*/
  // }
  // {/*        // <h2 style={{textAlign: 'center'}}>Torgbox Clocks</h2>*/
  // }
  // {/*        // <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>*/
  // }
  // {/*        // <div style={{margin: '10px', width: '20%'}}>*/
  // }
  // {/*        // <div style={{color: '#4a4a4a', margin: '10px'}}/>*/
  // }
  // {/*        // <div>*/
  // }
  // {/*        // <PickyDateTime/>*/
  // }
  // {/*        // size="xs"*/
  // }
  // {/*        // mode={2}*/
  // }
  // {/*        // locale="en-us"*/
  // }
  // {/*        // show={true}*/
  // }
  // {/*        // onClose={() => this.onClose()}*/
  // }
  // {/*        // onYearPicked={res => this.onYearPicked(res)}*/
  // }
  // {/*        // onMonthPicked={res => this.onMonthPicked(res)}*/
  // }
  // {/*        // onDatePicked={res => this.onDatePicked(res)}*/
  // }
  // {/*        // onResetDate={res => this.onResetDate(res)}*/
  // }
  // {/*        // onResetDefaultDate={res => this.onResetDefaultDate(res)}*/
  // }
  // {/*        // onSecondChange={res => this.onSecondChange(res)}*/
  // }
  // {/*        // onMinuteChange={res => this.onMinuteChange(res)}*/
  // }
  // {/*        // onHourChange={res => this.onHourChange(res)}*/
  // }
  // {/*        // onMeridiemChange={res => this.onMeridiemChange(res)}*/
  // }
  // {/*        // onResetTime={res => this.onResetTime(res)}*/
  // }
  // {/*        // onResetDefaultTime={res => this.onResetDefaultTime(res)}*/
  // }
  // {/*        // onClearTime={res => this.onClearTime(res)}*/
  // }
  // {/*        // />*/
  // }
  // {/*        // </div>*/
  // }
  // {/*        // </div>*/
  // }
  // {/*        // </div>*/
  // }
  // {/*        // </div></>*/
  // }
  // {/*);*/
  // }
  //
  // {/*// const CodeBlock = (*/
  // }
  // {/*//   {*/
  // }
  // {/*//     literal, language;*/
  // }
  // {/*//   }*/
  // }
// ) =>
//   {
  //   var html = Prism.highlight(literal, Prism.languages[language]);
  //   var cls = 'language-' + language;
  //
  //   return (
  //     <pre className={cls}>
  //     <code dangerouslySetInnerHTML={{__html: html}} className={cls}/>
  //   </pre>
  //   );
  // };
  //
  // CodeBlock.propTypes = {
  //   literal: PropTypes.string,
  //   language: PropTypes.string,
  // };
  //
  // class Clock extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       showPickyDateTime: true,
  //       date: '30',
  //       month: '01',
  //       year: '2000',
  //       hour: '03',
  //       minute: '10',
  //       second: '40',
  //       meridiem: 'PM',
  //     };
  //   }
  //
  //   onClose() {
  //   }
  //
  //   onYearPicked() {
  //     // let { year } = res;
  //     // this.setState({ year: year});
  //   }
  //
  //   onMonthPicked() {
  //     // let { month, year } = res;
  //     // this.setState({ year: year, month: month});
  //   }
  //
  //   onDatePicked(res) {
  //     let {date, month, year} = res;
  //     this.setState({year: year, month: month, date: date});
  //   }
  //
  //   onResetDate(res) {
  //     let {date, month, year} = res;
  //     this.setState({year: year, month: month, date: date});
  //   }
  //
  //   onResetDefaultDate(res) {
  //     let {date, month, year} = res;
  //     this.setState({year: year, month: month, date: date});
  //   }
  //
  //   onSecondChange(res) {
  //     this.setState({second: res.value});
  //   }
  //
  //   onMinuteChange(res) {
  //     this.setState({minute: res.value});
  //   }
  //
  //   onHourChange(res) {
  //     this.setState({hour: res.value});
  //   }
  //
  //   onMeridiemChange(res) {
  //     this.setState({meridiem: res});
  //   }
  //
  //   onResetTime(res) {
  //     this.setState({
  //       second: res.clockHandSecond.value,
  //       minute: res.clockHandMinute.value,
  //       hour: res.clockHandHour.value,
  //     });
  //   }
  //
  //   onResetDefaultTime(res) {
  //     this.setState({
  //       second: res.clockHandSecond.value,
  //       minute: res.clockHandMinute.value,
  //       hour: res.clockHandHour.value,
  //     });
  //   }
  //
  //   onClearTime(res) {
  //     this.setState({
  //       second: res.clockHandSecond.value,
  //       minute: res.clockHandMinute.value,
  //       hour: res.clockHandHour.value,
  //     });
  //   }
  //
  //   render() {
  //     let {showPickyDateTime, date, month, year, hour, minute, second, meridiem} = this.state;
  //     const today = new Date();
  //     const todayY = today.getFullYear();
  //     const todayM = today.getMonth() + 1;
  //     const todayD = today.getDate();
  //     return (
  //       <div style={{margin: '0 auto', width: '100%'}}>
  //         <h2 style={{textAlign: 'center'}}>Torgbox Clocks</h2>
  //         <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
  //           <div style={{margin: '10px', width: '20%'}}>
  //             <div style={{color: '#4a4a4a', margin: '10px'}}/>
  //             <div>
  //               <PickyDateTime
  //                 size="xs"
  //                 mode={2}
  //                 locale="en-us"
  //                 show={true}
  //                 onClose={() => this.onClose()}
  //                 onYearPicked={res => this.onYearPicked(res)}
  //                 onMonthPicked={res => this.onMonthPicked(res)}
  //                 onDatePicked={res => this.onDatePicked(res)}
  //                 onResetDate={res => this.onResetDate(res)}
  //                 onResetDefaultDate={res => this.onResetDefaultDate(res)}
  //                 onSecondChange={res => this.onSecondChange(res)}
  //                 onMinuteChange={res => this.onMinuteChange(res)}
  //                 onHourChange={res => this.onHourChange(res)}
  //                 onMeridiemChange={res => this.onMeridiemChange(res)}
  //                 onResetTime={res => this.onResetTime(res)}
  //                 onResetDefaultTime={res => this.onResetDefaultTime(res)}
  //                 onClearTime={res => this.onClearTime(res)}
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
}

export default Clock;
