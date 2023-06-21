const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {

    const APIKey = '85110040ca1448168eb41926232006';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&lang=es`)
        .then(response => response.json())
        .then(json => {

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            const rain = document.querySelector('.weather-details .precipitation span');
            const feelsLike = document.querySelector('.weather-details .feelsLike span');

            let isDay;
            var iconCode;

            if (json.current.is_day === 0) {
                isDay = 'night';
            } else {
                isDay = 'day';
            }

            fetch(`https://www.weatherapi.com/docs/weather_conditions.json`)
            .then(res => res.json())
            .then(data => {
                function getImgCode(code) {
                    return data.filter(
                      function(data) {
                        return data.code == code
                      }
                    );
                }

                let current = getImgCode(json.current.condition.code);
                iconCode = current[0].icon;
                image.src = `iconos/${isDay}/${iconCode}.png`;
            });

            temperature.innerHTML = `${parseInt(json.current.temp_c	)}<span>°C</span>`;
            description.innerHTML = `${json.current.condition.text}`;
            humidity.innerHTML = `${json.current.humidity}%`;
            wind.innerHTML = `${json.current.wind_kph}Km/h`;
            rain.innerHTML = `${json.current.precip_mm}mm`;
            feelsLike.innerHTML = `${json.current.feelslike_c}<span>°C</span>`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';
        });
});