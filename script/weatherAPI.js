const API_URL = "https://api.open-meteo.com/v1/forecast";

export async function fetchWeather(lat, lon) {
  const url = `${API_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`날씨 요청 실패 (${response.status})`);
  }

  const data = await response.json();

  return {
    temperature: data.current.temperature_2m,
    temperatureUnit: data.current_units.temperature_2m,
    humidity: data.current.relative_humidity_2m,
    humidityUnit: data.current_units.relative_humidity_2m,
  };
}
