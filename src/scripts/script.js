let weather = {
  apiKey: "351a04d4c36615d6cf9abc08a96b4615",
  getWeather: (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => weather.displayWeather(data))
  },
  displayWeather: (data) => {
    const { name } = data
    const { icon, description } = data.weather[0]
    const { temp, humidity } = data.main
    const { speed } = data.wind
    console.log(name, icon, description, temp, humidity, speed)
  }
}