import {render} from 'react-dom';
import {
  Backdrop,
  OuterClock,
  SecondHand,
  MinuteHand,
  HourHand
} from './clockStyles';

function App(): JSX.Element {
  return (
    <Backdrop>
      <OuterClock>
        <SecondHand/>
        <MinuteHand/>
        <HourHand/>
      </OuterClock>
    </Backdrop>
  );
}

render(<App/>, document.getElementById('root'));
