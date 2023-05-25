import { useEffect, useState, useCallback } from 'react';
import './App.scss';
import Forecast from '../../components/Forecast/Forecast';
import ForecastDay from '../../components/Forecast/ForecastDay';
import { getForecast } from '../../api/OpenMateo/getForecast/getForecast';
import { ForecastType } from '../../api/OpenMateo/getForecast/types';
import { getGeocodeLatLng } from '../../api/FreeGeocoding/getGeocodeLatLng/getGeocodeLatLng';
import { debounce } from '../../lib/debounce'

function App() {

  const [forecast, setForecast] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [address, setAddress] = useState("Melbourne");

  const debounceAfterAddressChange = useCallback(debounce(function(newAddress: string) {
    updateForecast(newAddress)
  }, 1000), []);

  const handleAddressChange = (newAddress: string) => {
    setAddress(newAddress);
    debounceAfterAddressChange(address);
  }

  const updateForecast = (newAddress: string) => {
    setLoading(true);
    setError("");

    getGeocodeLatLng(newAddress)
      .then((res) => {
        return getForecast(res.lat, res.lng)
      })
      .then((result: ForecastType) => {
        setForecast(result);
        setLoading(false);
      })
      .catch(err => {
        setError("Could not load the address");
        setLoading(false);
        setForecast([]);
      })
  }

  useEffect(() => {
    updateForecast(address)
  }, [])

  return (
    <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-size-4">
                  Shell Weather Forecast
                </div>
                <div className="column">
                  <div className="field">
                    <div className={"control " + (loading ? "is-loading" : "")}>
                      <form>
                        <input className="input" type="text" value={address} placeholder="Text input"  onChange={(e) => handleAddressChange(e.target.value)} />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <p className="title">
                  </p>
                  { loading ? <button className="button is-loading is-fullwidth is-ghost is-large">Loading</button> :
                    <Forecast>
                      {
                        Object.values(forecast).map((forecastDay: any) => {
                          return <ForecastDay
                            key={forecastDay.date}
                            weatherCode={forecastDay.weatherCode}
                            windspeed={forecastDay.windspeed}
                            realFeelTemperature={forecastDay.realFeelTemperature}
                            precipitation={forecastDay.precipitation}
                            apparentMaxTemperature={forecastDay.apparentMaxTemperature}
                            date={forecastDay.date}
                            />
                        }) 
                      }
                    </Forecast>
                  }
                  {
                    error ? error : ""
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
