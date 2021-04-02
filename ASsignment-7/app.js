
const input = document.getElementById('form');
const cityName = document.querySelector('.cityName');
const countryName = document.querySelector('.countryName');
const showWeather = document.querySelector('.weather');
const weIcon  = document.querySelector('.icon');

const getWeather = async(searchtext) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchtext}&APPID=0c93f81cd20966730205c9b8a1277096`)
    .then(res => res.json())
    .then(data => {
        var namevalue = data['name'];
        var country = data['sys']['country'];
        var weather = data['weather']['0']['description'];
        
        cityName.innerHTML = namevalue;
        countryName.innerHTML = country;
        showWeather.innerHTML = weather;

    })
}
input.addEventListener('submit', (e) => {
    console.dir(input.elements[0].value);
    const searchtext = input.elements[0].value;
    getWeather(searchtext);
    e.preventDefault();
})