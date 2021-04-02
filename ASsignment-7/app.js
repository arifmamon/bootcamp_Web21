
const input = document.getElementById('form');


const getWeather = async(searchtext) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=$searchtext&APPID=0c93f81cd20966730205c9b8a1277096`)
}
input.addEventListener('submit', (e) => {
    console.dir(input.elements[0].value);
    const searchtext = input.elements[0].value;
    getWeather(searchtext);
    e.preventDefault();
})