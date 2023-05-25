import axios from 'axios'
import config from '../config'
import { mapForecastToDays } from './mapForecastToDays'

export const getForecast = async (lat: number, lng: number) => {
  const result = await axios({
    url: `/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,apparent_temperature_max,temperature_2m_max,precipitation_sum,windspeed_10m_max&timezone=GMT&forecast_days=7`,
    baseURL: config.url
  })
  return mapForecastToDays(result.data)
}