
const input = document.getElementById('form');
const cityName = document.querySelector('.cityName');
const countryName = document.querySelector('.countryName');
const temp = document.querySelector('.tempreture');
const showWeather = document.querySelector('.weather');
const weIcon  = document.querySelector('.icon');
const tem_min_max = document.querySelector('.temp_minimum');
const date = document.querySelector('.date');
const getWeather = async(searchtext) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchtext}&units=metric&APPID=0c93f81cd20966730205c9b8a1277096`)
    .then(res => res.json())
    .then(data => {
        namevalue = data.name;
        country = data.sys.country;
        weather = data.weather[0].description;
        temp_ = data.main.temp;
        temp_min1 = data.main.temp_min;
        temp_max2 = data.main.temp_max;
        
        cityName.innerHTML =  (namevalue +', ' + country);
        //countryName.innerHTML = country;
        temp.innerHTML = temp_ + '°c';
        showWeather.innerHTML = weather;
        tem_min_max.innerHTML = temp_min1 + '°c' +' / '+ temp_max2 + '°c';

    })
}
input.addEventListener('submit', (e) => {
    console.dir(input.elements[0].value);
    const searchtext = input.elements[0].value;
    getWeather(searchtext);
    input.elements[0].value="";
    e.preventDefault();
})