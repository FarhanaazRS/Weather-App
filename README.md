# 🌤️ Weather App

A simple weather application that fetches real-time weather data using the OpenWeatherMap API.
Users can enter the name of a city or state to get the current weather conditions, including temperature, humidity, and a weather description with an emoji.

## 🔧 Features

- Search for current weather by city or state
- Displays:
  - City name
  - Temperature (in °F)
  - Humidity
  - Weather description
  - Emoji representation of weather
- Handles errors like invalid city names or empty inputs

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- [OpenWeatherMap API](https://openweathermap.org/api)

## 📂 Project Structure
```

weather-app/
├── index.html # Main HTML file
├── style.css # Stylesheet
├── app.js # JavaScript logic
├── Assets/# Image used in the project
```

## 🚀 How to Run

1. Clone this repository:
  ``` git clone https://github.com/your-username/weather-app.git```
2. Navigate into the project folder:
  ``` cd weather-app ```
3. Open `index.html` in your browser.

> 💡 Make sure you are connected to the internet to fetch data from the OpenWeatherMap API.

## 🔑 API Key

This project uses a free API key from OpenWeatherMap. If you fork or clone the repo, you can replace the existing key with your own:

1. Get your free API key from: https://openweathermap.org/appid
2. Replace the API key in `app.js`:
```javascript
const apiKey = "YOUR_API_KEY_HERE";
```
## 📌 Note

Temperature is shown in Fahrenheit (°F).

The project uses simple emoji icons for weather conditions.


