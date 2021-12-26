const todoForm = document.getElementById("todo_form");
const list = document.getElementById("todo_list");
const todoInput = document.getElementById("todo");

let todoList = [];

function saveTodo() {
  localStorage.setItem("todo", JSON.stringify(todoList));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoList = todoList.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function createTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const btn = document.createElement("button");

  btn.innerText = "✅";
  // ✘✓✖︎⌦🗑☑️
  btn.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);
  list.appendChild(li);
}

function handleTodo(e) {
  e.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";
  const newValueObj = {
    text: todoValue,
    id: Date.now(),
  };
  todoList.push(newValueObj);
  createTodo(newValueObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleTodo);

const savedTodo = localStorage.getItem("todo");
if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  todoList = parsedTodo;
  parsedTodo.forEach(createTodo);
}
