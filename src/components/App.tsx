import Clock from 'react-clock';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import LocationsList from './locations-list/locations-list';
import {BrowserRouter} from 'react-router-dom';
import {City} from '../types/city';
// import {CitiesList} from '../constants';
// import {CitiesList} from '../constants';
// import locationsList from './locations-list/locations-list';

function App(city: City): JSX.Element {
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
    <BrowserRouter>
      <div style={{margin: '0 auto', width: '100%'}}>
        <h2 style={{textAlign: 'center'}}>Torgbox Clocks</h2>
        <Clock hourHandLength={30} size={200} value={value}/>
        <div>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            <div>
              <div>
                <div>
                  <div className="picky-date-time-clock__inputer-wrapper">
                    <div className="picky-date-time-clock__inputer">
                      <input className="picky-date-time-clock__input" value={dayjs().format('HH:mm:ss')}/>
                    </div>
                  </div>
                  <div className="locations container">
                    <LocationsList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
