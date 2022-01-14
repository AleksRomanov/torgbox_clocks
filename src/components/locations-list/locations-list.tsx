import {Link} from 'react-router-dom';
import {CitiesList} from '../../constants';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {City} from '../../types/city';
import {selectCity} from '../../store/offers-reducer/offers-reducer';
// import dayjs from 'dayjs';

// import utc from 'dayjs/plugin/utc';

function LocationsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.offersReducer.currentCity);
  // const advanced = required("dayjs/plugin/advancedFormat");

  const onCityChoose = (city: City) => {
    if (currentCity.name !== city.name) {
      dispatch(selectCity(city));
    }
  };

  function CityItemRender(city: City) {
    // const [selectedCity] = React.useState();
    // const isCurrentCityClass = currentCity === city ? 'tabs__item--active' : '';
    return (
      <li style={{listStyle: 'none'}} className="locations__item">
        <Link onClick={() => onCityChoose(city)} to="#" className="locations__item-link tabs__item">
          {/*<Link onClick={() => onCityChoose(city)} to="#" className={`locations__item-link tabs__item ${isCurrentCityClass}`}>*/}
          <div>
            <select>
              {/*<option>{dayjs(new Date().toLocaleString('en-US', {timeZone: 'America/Los_Angeles'})).format('h:mA')}</option>*/}
              <option value={city.name}>{city.name}</option>
            </select>
            {/*<label></label>*/}
            {/*<select*/}
            {/*  placeholder="City"*/}
            {/*  value={city.name}*/}
            {/*  onChange={() => city.name}*/}
            {/*>*/}
            {/*  <option>--Choose City--</option>*/}
            {/*  /!*{CitiesList.map((e) => (*!/*/}
            {/*  /!*  <option value={city.name} key={currentCity.name}/>*!/*/}
            {/*  /!*))}*!/*/}
            {/*</select>*/}
          </div>
        </Link>
      </li>
    );
  }

  return (
    <ul style={{padding: '0', textAlign: 'center'}} className="locations__list tabs__list">
      {CitiesList.map((city: City) => (
        CityItemRender(city)
      ))}
    </ul>
  );
}

export default LocationsList;
