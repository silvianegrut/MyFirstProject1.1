function firstFunction(){

  const submitForm = document.querySelector('.add');
  const addButton = document.querySelector('.addToDo');
  const ToDo = document.querySelector('.todo');


  const generateTemplate = (todo) => {
    const list = document.querySelectorAll('.todo li'); //NodeList of all li's
    let listLength = list.length;
    console.log(listLength);

  
    const html = `<li>
                  <input type="checkbox" id="todos_${todo.id}">
                  <label for="todos_${listLength}">
                    <span class="check"></span>
                    ${todo.value}
                  </label>
                  <button data-id="${todo.id}" class="delete">🗑️</button>
                  </li>`
    ToDo.innerHTML += html;
};


  function addTodos(e) {
    e.preventDefault();
    const todo = submitForm.add.value.trim(); //trim the extra space in input
    if (todo.length) {
        const newToDo={id:Date.now(),value:todo};
        generateTemplate(newToDo);
        submitForm.reset();
        var storedTodo=JSON.parse(localStorage.getItem('mytodos')) || [];
        storedTodo.push(newToDo);
        localStorage.setItem('mytodos', JSON.stringify(storedTodo));
  }
 }
  //add todo
  submitForm.addEventListener('submit', addTodos);
  addButton.addEventListener('click', addTodos);

  function deleteTodos(e) {
    console.log(e.target);
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        const id=+e.target.dataset.id;
        var storedTodo=JSON.parse(localStorage.getItem('mytodos')) || [];
        storedTodo=storedTodo.filter((x) => x.id !=id )
        console.log(storedTodo);
        localStorage.setItem('mytodos', JSON.stringify(storedTodo));
    }
  }
  //remove todo
  ToDo.addEventListener('click', deleteTodos);

     var todos=JSON.parse(localStorage.getItem('mytodos'));
     console.log('todos',todos);
     todos.forEach(todo => {
       generateTemplate(todo);
  });

}
     window.addEventListener('DOMContentLoaded', (event) => {
       firstFunction();
});








