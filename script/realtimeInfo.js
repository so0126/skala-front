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

function renderLoading(city, lat, lon) {
  weatherBox.innerHTML = `
    <p><strong>${city}</strong></p>
    <p>위도 ${lat} / 경도 ${lon}</p>
    <div class="loading-state" role="status" aria-live="polite">
      <span class="spinner" aria-hidden="true"></span>
      <span>날씨를 불러오는 중입니다</span>
    </div>
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

  renderLoading(city, lat, lon);

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
