new Vue({
    el: '#app',
    data: {
        location: '',
        weatherData: null
    },
    methods: {
        getWeather() {
            if (this.location === '') {
                alert('Please enter a location');
                return;
            }

            const apiKey = '1bb30009d456551d967b348e2fad7abe'; // Replace with your actual API key
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    this.weatherData = data;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }
});
