const weatherForm = document.querySelector(".weatherform");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const cityDisplay = document.querySelector(".cityDisplay");
const apiKey = "YOUR_API_KEY_HERE";


weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value;

    if (city) {

        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }
        catch (error) {
            console.error(error);
            displayError(error);
        }

    }
    
    else {
        displayError("Please Enter The City");
    }
});

async function getWeatherData(city) {

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiURL);

    if (!response.ok) {
        throw new Error("Could Not Fetch Data");
    }

    return await response.json();

}

function displayWeatherInfo(data) {

    const { name: city,
        main: { temp, humidity },
        weather: [{ description, id }] } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humdityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const emoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * (9 / 5) + 32).toFixed(1)} °F`;
    humdityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = `${description.toUpperCase()}`;
    emoji.textContent = getWeatherEmoji(id);


    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humdityDisplay.classList.add("humdityDisplay");
    descDisplay.classList.add("descDisplay");
    emoji.classList.add("emoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humdityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(emoji);

}

function getWeatherEmoji(weatherId) {

    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌦️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "🌨️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId == 800):
            return "🌞";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";

    }

}

function displayError(message) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
