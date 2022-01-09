import Clock from 'react-clock';
import {useEffect, useState} from 'react';

function App(): JSX.Element {
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
    <div>
      <h2 style={{textAlign: 'center'}}>Torgbox Clocks</h2>
      <Clock value={value}/>
      <div style={{margin: '0px auto', width: '100%'}}>
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
                <div>
                  <div>
                    <div className="picky-date-time-clock__inputer-wrapper">
                      <div className="picky-date-time-clock__inputer">
                        <input className="picky-date-time-clock__input" value={Date()}/>
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
      </div>
    </div>
  );
}

export default App;
