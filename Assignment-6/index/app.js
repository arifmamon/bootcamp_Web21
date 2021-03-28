const input = document.getElementById('input_type');
const button = document.getElementById('button');
const sholist = document.getElementById('showlist');

button.onclick = function(e) {

    const val = input.value;
    const list = document.createElement('li');
    list.innerText = val;

    sholist.append(list);
}