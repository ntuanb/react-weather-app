import config from '../config';
import { ForecastDayType, ForecastType } from './types'

export const mapForecastToDays = (openMateoForecast: any) => {
  const days: ForecastType = {}

  for (let dayNumber = 0; dayNumber < config.forecast.forecast_days; dayNumber += 1) {
    const day: ForecastDayType = {
      date: openMateoForecast.daily.time[dayNumber],
      weatherCode: openMateoForecast.daily.weathercode[dayNumber],
      apparentMaxTemperature: openMateoForecast.daily.apparent_temperature_max[dayNumber],
      realFeelTemperature: openMateoForecast.daily.temperature_2m_max[dayNumber],
      precipitation: openMateoForecast.daily.precipitation_sum[dayNumber],
      windspeed: openMateoForecast.daily.windspeed_10m_max[dayNumber],
    }

    days[openMateoForecast.daily.time[dayNumber]] = day;
  }

  return days
}