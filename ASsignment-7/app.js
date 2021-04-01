
const input = document.getElementById('form');



fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0c93f81cd20966730205c9b8a1277096`)
    .then(data => {
        console.log(data);
        return data.json();
    })
    .then(res => console.log(res))

input.addEventListener('submit', (e) => {
    console.dir(input.elements[0].value);

    e.preventDefault();
})