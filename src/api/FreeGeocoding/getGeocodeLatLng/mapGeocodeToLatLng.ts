export const mapGeocodeToLatLng = (geocodeLatLng: any) => {
  if (!geocodeLatLng.length) {
    return {}
  }

  return {
    lat: geocodeLatLng[0].lat,
    lng: geocodeLatLng[0].lon
  }
}