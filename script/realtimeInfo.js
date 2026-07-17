import { fetchWeather } from "./weatherAPI.js";

const citySelect = document.getElementById("city-select");
const weatherBox = document.getElementById("weather-box");

let latestRequest = 0;

function render(city, lat, lon, status) {
  weatherBox.innerHTML = `
    <p><strong>${city}</strong></p>
    <p>위도 ${lat} / 경도 ${lon}</p>
    <p>${status}</p>
  `;
}

citySelect.addEventListener("change", async () => {
  const option = citySelect.selectedOptions[0];
  const lat = option.dataset.lat;
  const lon = option.dataset.lon;

  if (lat === undefined || lon === undefined) {
    weatherBox.innerHTML = "";
    return;
  }

  const city = option.textContent;
  const requestId = ++latestRequest;

  render(city, lat, lon, "로딩 중… ⏳");

  try {
    const weather = await fetchWeather(lat, lon);

    if (requestId !== latestRequest) {
      return;
    }

    render(
      city,
      lat,
      lon,
      `기온 ${weather.temperature}${weather.temperatureUnit} / 습도 ${weather.humidity}${weather.humidityUnit}`
    );
  } catch (error) {
    if (requestId !== latestRequest) {
      return;
    }

    render(city, lat, lon, "날씨를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
  }
});
