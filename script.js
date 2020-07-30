const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.addToDo');
const ToDo = document.querySelector('.todo');
const list = document.querySelectorAll('.todo li'); 

let listLenght = list.lenght;

const generateTempalate = (todos) => {
  
  const html = `<li>
                  <input type="checkbox" id="todos_${listLenght}">
                  <label for="todos_${listLenght}">
                    <span class="check"></span>
                    ${todo}
                  </label>
                  <i class="far fa-trash-alt delete"></i>
                </li>`
  ToDo.innerHTML += html;
};

function addTodos(e) {
  e.preventDefault();
  const todo = submitForm.add.value.trim();
  if (todo.length) {
    listLenght = listLenght + 1;
    generateTempalate(todo);
    submitForm.reset();
  }
}

submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);

function deleteTodos(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
}

ToDo.addEventListener('click', deleteTodos);
