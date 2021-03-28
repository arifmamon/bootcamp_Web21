const input = document.getElementById('input_type');
const button = document.getElementById('button');
const sholist = document.getElementById('showlist');
const todolist = document.querySelector('.list');
const clear = document.querySelector('.clear');

const deleteTask = function() {
	console.log("Delete task...");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//Remove the parent list item from the ul
	ul.removeChild(listItem);
}

button.onclick = function(e) {

    const val = input.value;
    const list = document.createElement('li');

    const delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.className = "delete";
    list.appendChild(delbtn);

    delbtn.onclick = deleteTask;
    list.innerText = val;
    // list.onclick = function (e){
    //     console.log(e);
    //     e.target.remove();
    // }
    sholist.append(list);


}
