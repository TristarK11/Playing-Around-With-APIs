const form = document.getElementById('weatherForm');
const resultDiv = document.getElementById('weatherResult');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const city = document.getElementById('city').value.trim();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    resultDiv.innerHTML = "Fetching weather...";
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === 200) {
      const temp = data.main.temp;
      const weather = data.weather[0].description;
      const icon = data.weather[0].icon;

      resultDiv.innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon"></p>
        <p><strong>Temperature:</strong> ${temp} °C</p>
        <p><strong>Description:</strong> ${weather}</p>
      `;
    } else {
      resultDiv.innerHTML = `<p>Error: ${data.message}</p>`;
    }
  } catch (err) {
    console.error(err);
    resultDiv.innerHTML = "<p>Failed to fetch weather data. Please try again.</p>";
  }
});
