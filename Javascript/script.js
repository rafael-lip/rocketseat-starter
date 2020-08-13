var listElement = document.querySelector('#app ul');
var buttonElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');

var toDos = JSON.parse(localStorage.getItem('list_toDos')) || [
  'Fazer cafe',
  'Estudar Javascript',
  'Acessar comunidade da Rocketseat',
];

function renderTodos() {
  listElement.innerHTML = '';

  for (toDo of toDos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(toDo);
    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');
    var pos = toDos.indexOf(toDo);

    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('onclick', 'removeTodo(' + pos + ')');
    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  var todoText = inputElement.value;

  if (!todoText) {
    console.log(todoText);
    return;
  }
  toDos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

function removeTodo(pos) {
  toDos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_toDos', JSON.stringify(toDos));
}

renderTodos();

buttonElement.onclick = addTodo;
