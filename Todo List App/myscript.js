let msgBox = document.querySelector('.msg');

function get_todos() {
    let todos = new Array;
    let todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add() {
    let task = document.getElementById('task').value;

    if (task) {
    document.getElementById('task').value = "";
    let todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    msgBox.classList.remove('dsply');
    msgBox.innerText = `Item Added Successfully`;
 
    show();
 
    setInterval(function(){ 
    msgBox.classList.add('dsply');
}, 3000);
} else {
    msgBox.classList.remove('dsply');
    msgBox.innerText = `Please add a ToDo Item`;
 
    show();
 
    setInterval(function(){ 
    msgBox.classList.add('dsply');
}, 3000);
}
}
 
// function clearDefault(a) {
// if (a.defaultValue==a.value) {a.value=""}
	
// };
function remove() {
    let id = this.getAttribute('id');
    let todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    msgBox.classList.remove('dsply');
    msgBox.innerText = `Item Deleted Successfully`;
 
    show();
 
    setInterval(function(){ 
    msgBox.classList.add('dsply');
}, 3000);

    return false;
}
 
function show() {
    let todos = get_todos();
 
    let html = '<ul>';
    for(let i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">Delete</button> </li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    let buttons = document.getElementsByClassName('remove');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
document.querySelector('#task').addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        add()
        show()
    }
    
})
show();