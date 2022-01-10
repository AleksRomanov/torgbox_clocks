import Clock from 'react-clock';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';

function App(): JSX.Element {
  // const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000,
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{margin: '0 auto', width: '100%'}}>
      <h2 style={{textAlign: 'center'}}>Torgbox Clocks</h2>
      <Clock value={value}/>
      <div>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          <div>
            <div>
              <div className="picky-date-time visible">
                <div>
                  <div>
                    <div className="picky-date-time-clock__inputer-wrapper">
                      <div className="picky-date-time-clock__inputer">
                        <input className="picky-date-time-clock__input" value={dayjs().format('HH:mm:ss')}/>
                      </div>
                      <div className="picky-date-time-clock__inline-div picky-date-time-clock__inline-div--middle">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
