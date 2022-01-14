// import {Link} from 'react-router-dom';
// import {TimeZones} from '../../constants';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {selectCity} from '../../store/timeZones-reducer/timeZones-reducer';
import {useState} from 'react';
import {City} from '../../types/city';
import { TimeZones } from '../../constants';
// import {TimeZones} from '../../constants';
// import dayjs from 'dayjs';
// import utc from 'dayjs/plugin/utc';

function LocationsList(): JSX.Element {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.offersReducer.currentCity);
  // const advanced = required("dayjs/plugin/advancedFormat");

  const onCityChoose = (city: City) => {
    if (currentCity.name !== city.name) {
      dispatch(selectCity(city));
    }
  };

  function CityItemRender(city: City) {
    return (
      <div style={{listStyle: 'none'}} className="">
        <button onClick={() => onCityChoose(city)} className="locations__item-link tabs__item">
          <div>
            <select value={value} onChange={(event) => setValue(event.target.value)}>
              {/*<option>{dayjs(new Date().toLocaleString('en-US', {timeZone: 'America/Los_Angeles'})).format('h:mA')}</option>*/}
              <option value={value}>{city.name}</option>
              {/*<option value={city.name}>{city.name}</option>*/}
            </select>
            <p style={{margin: '0'}}>
              {value === '1' && 'вы выбрали первый пункт'}
              {value === '2' && 'вы выбрали второй пункт'}
              {value === '3' && 'вы выбрали третий пункт'}
            </p>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div style={{padding: '0', textAlign: 'center'}} className="locations__list tabs__list">
      {TimeZones.map((city: City) => (
        CityItemRender(city)
      ))}
    </div>
  );
}

export default LocationsList;
