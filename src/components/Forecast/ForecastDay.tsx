import ForecastIcon from './ForecastIcon';
import ForecastSummary from './ForecastSummary';
import './ForecastDay.scss';
import { format, parseISO } from "date-fns";
import fontawesome from '@fortawesome/fontawesome'
import { faHeart } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faHeart);

interface ForecastDayType {
  weatherCode: any
  apparentMaxTemperature: number;
  precipitation: number;
  realFeelTemperature: number;
  windspeed: number;
  date: string
}

const formatDate = (date: string) => {
  return format(parseISO(date), "dd LLL yyyy - EEEE");
}

function ForecastDay(props: ForecastDayType) {
  const {
    date,
    weatherCode,
    apparentMaxTemperature,
    precipitation,
    realFeelTemperature,
    windspeed
  } = props

  return (
    <div className="forecast-day">
      <div className="forecast-day__icon">
        <ForecastIcon weatherCode={weatherCode}></ForecastIcon>
      </div>
      <div className="forecast-day__summary">
        <div className="forecast-day__summary-temperature">
          {apparentMaxTemperature}
          <span className="forecast-day__summary-feels-like">Feels like {realFeelTemperature}</span>
        </div>
        <div className="forecast-day__summary-text">
          <ForecastSummary precipitation={precipitation} />
        </div>
      </div>
      <div className="forecast-day__details">
        <div className="forecast-day__details-date">
          {date ? formatDate(date) : undefined}
        </div>
        <div className="forecast-day__details-extra">
          {
            windspeed ? 
            <div className="forecast-day__details-extra-item"><button className="button is-small"><ForecastIcon icon="wi wi-strong-wind" /> {windspeed + ' kmph'}</button></div>
            : undefined
          }
          {
            precipitation ? 
              <div className="forecast-day__details-extra-item"><button className="button is-small"><ForecastIcon icon="wi wi-raindrop" />{precipitation} mm</button></div>
              : undefined
          }
        </div>
      </div>
    </div>
  );
}

export default ForecastDay;
