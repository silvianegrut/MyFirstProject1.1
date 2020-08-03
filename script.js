function firstFunction(){


const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.addToDo');
const ToDo = document.querySelector('.todo');
const list = document.querySelectorAll('.todo li'); 

let listLenght = list.lenght;

const generateTemplate = (todos) => {
  
  const html = `<li>
                  <input type="checkbox" id="todos_${listLenght}">
                  <label for="todos_${listLenght}">
                    <span class="check"></span>
                    ${todos}
                  </label>
                  <button class="delete">🗑️</button>

                </li>`
  ToDo.innerHTML += html;
};

function addTodos(e) {
  e.preventDefault();
  const todo = submitForm.add.value.trim();
  if (todo.length) {
    listLenght = listLenght + 1;
    generateTemplate(todo);
    submitForm.reset();
    
  }
}

submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);



function deleteTodos(e) {
  console.log(e.target);
  if (e.target.classList.contains('delete')) {
      e.target.parentElement.remove();
      
  }
}

ToDo.addEventListener('click', deleteTodos);
}
window.addEventListener('DOMContentLoaded', (event) => {
  firstFunction();
});




