import './Forecast.scss';

interface ForecastType {
  children: any
}

function Forecast(props: ForecastType) {
  const { children } = props

  return (
    <div className="forecast">
      {children}
    </div>
  );
}

export default Forecast;
