let weather = {
  apiKey: "351a04d4c36615d6cf9abc08a96b4615",
  getWeather: (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},id&appid=${weather.apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => weather.displayWeather(data))
    console.log(response);
  },
  displayWeather: (data) => {
    const { name } = data
    const { icon, description } = data.weather[0]
    const { temp, humidity } = data.main
    const { speed } = data.wind
    document.querySelector("#city").innerText = name
    document.querySelector("#icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    document.querySelector("#description").innerText = description
    document.querySelector("#temp").innerText = `${temp} °C`
    document.querySelector("#humidity").innerText = `${humidity}%`
    document.querySelector("#speed").innerText = `${speed} km/j`
    document.querySelector("#condition").classList.remove("visually-hidden")
  },
  search: () => {
    weather.getWeather(document.querySelector("#searchInput").value)
  }
};

document.querySelector("#search").addEventListener("click", () => {
  Swal.fire({
    title: 'Mencari data',
    html: 'Mohon tunggu <b></b> milliseconds.',
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
  setTimeout(weather.search, 1000)
})