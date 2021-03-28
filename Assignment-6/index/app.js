const input = document.getElementById('input_type');
const button = document.getElementById('button');
const sholist = document.getElementById('showlist');
const todolist = document.querySelector('.list');
const clear = document.querySelector('.clear');


button.onclick = function(e) {

    const val = input.value;
    const list = document.createElement('li');

    const delbtn = document.createElement("close");
    // delbtn.className = "close";
    
    list.innerText = val;
    list.onclick = function (e){
        console.log(e);
        e.target.remove();
    }
    sholist.append(list);


}
