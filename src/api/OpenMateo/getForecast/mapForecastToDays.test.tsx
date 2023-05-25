import { mapForecastToDays } from "./mapForecastToDays";

test('mapForecastToDays', () => {
    expect(mapForecastToDays({
      "latitude": -37.75,
      "longitude": 144.875,
      "generationtime_ms": 0.22399425506591797,
      "utc_offset_seconds": 0,
      "timezone": "GMT",
      "timezone_abbreviation": "GMT",
      "elevation": 18,
      "daily_units": {
          "time": "iso8601",
          "weathercode": "wmo code",
          "apparent_temperature_max": "°C",
          "temperature_2m_max": "°C",
          "precipitation_sum": "mm",
          "windspeed_10m_max": "km/h"
      },
      "daily": {
          "time": [
              "2023-05-25",
              "2023-05-26",
              "2023-05-27",
              "2023-05-28",
              "2023-05-29",
              "2023-05-30",
              "2023-05-31"
          ],
          "weathercode": [
              80,
              3,
              61,
              61,
              3,
              3,
              61
          ],
          "apparent_temperature_max": [
              11.9,
              10.7,
              12.2,
              13.6,
              12,
              15.6,
              14.4
          ],
          "temperature_2m_max": [
              14.4,
              13.2,
              15.2,
              14.7,
              14.5,
              16.8,
              16.9
          ],
          "precipitation_sum": [
              7.6,
              0.2,
              10.4,
              3.3,
              0,
              0,
              0.3
          ],
          "windspeed_10m_max": [
              23.1,
              15.9,
              15.5,
              14,
              15.2,
              12.6,
              17.1
          ]
      }
    })).toEqual({
      "2023-05-25": {
        "apparentMaxTemperature": 11.9,
        "date": "2023-05-25",
        "precipitation": 7.6,
        "realFeelTemperature": 14.4,
        "weatherCode": 80,
        "windspeed": 23.1,
      },
      "2023-05-26": {
        "apparentMaxTemperature": 10.7,
        "date": "2023-05-26",
        "precipitation": 0.2,
        "realFeelTemperature": 13.2,
        "weatherCode": 3,
        "windspeed": 15.9,
      },
      "2023-05-27": {
        "apparentMaxTemperature": 12.2,
        "date": "2023-05-27",
        "precipitation": 10.4,
        "realFeelTemperature": 15.2,
        "weatherCode": 61,
        "windspeed": 15.5,
      },
      "2023-05-28": {
        "apparentMaxTemperature": 13.6,
        "date": "2023-05-28",
        "precipitation": 3.3,
        "realFeelTemperature": 14.7,
        "weatherCode": 61,
        "windspeed": 14,
      },
      "2023-05-29": {
        "apparentMaxTemperature": 12,
        "date": "2023-05-29",
        "precipitation": 0,
        "realFeelTemperature": 14.5,
        "weatherCode": 3,
        "windspeed": 15.2,
      },
      "2023-05-30": {
        "apparentMaxTemperature": 15.6,
        "date": "2023-05-30",
        "precipitation": 0,
        "realFeelTemperature": 16.8,
        "weatherCode": 3,
        "windspeed": 12.6,
      },
      "2023-05-31": {
        "apparentMaxTemperature": 14.4,
        "date": "2023-05-31",
        "precipitation": 0.3,
        "realFeelTemperature": 16.9,
        "weatherCode": 61,
        "windspeed": 17.1,
      },
  });
});

/**
 * Tests to add
 * - What happens when there is no data to map {}
 * - What happens when each of the values is missing
 * - What happens when the input type is not valid eg. string, number, array, undefined, null
 */