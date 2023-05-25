const config = {
  url: "https://api.open-meteo.com",
  forecast: {
    daily: 'weathercode,apparent_temperature_max,temperature_2m_max,precipitation_sum,windspeed_10m_max',
    timezone: 'GMT',
    forecast_days: 7
  }
}

export default config