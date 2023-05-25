import config from "../config"
import axios from 'axios'
import { mapGeocodeToLatLng } from "./mapGeocodeToLatLng"

export const getGeocodeLatLng = async (address: string) => {
  const result = await axios({
    url:  `${config.url}${address.replace(' ', '+')}`,
  })

  if (!result.data) {
    return {}
  }

  return mapGeocodeToLatLng(result.data)
}