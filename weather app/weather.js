let currtempEl = document.getElementById("Current-weather")
let cityEl = document.getElementById("city")
let browseEl = document.getElementById("browse")
let humidEl = document.getElementById("humid")
let iconEl = document.getElementById("icon")
const apikey = "6dbe86d88dcc17c068cbff602013e612"

const iconMap = {
    'Thunderstorm': "⛈️",
    'Drizzle': "🌦️",
    'Rain' : "🌧️",
    'Snow': "🌨️",
    'Clear': "☀️",
    'Clouds': "⛅"
}


browseEl.addEventListener('click', async function () {
    let city = document.getElementById("input").value
    console.log(city)


    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)

    if (!response) {
        displayerror();
    }

    let data = await response.json()

    console.log(data)

    let temp = Math.trunc(data.main.temp)
    currtempEl.textContent = `${temp}°`
    cityEl.textContent = data.name
    humidEl.textContent = `Humidity: ${data.main.humidity}`
    iconEl.textContent = iconMap[data.weather[0].main]

})






