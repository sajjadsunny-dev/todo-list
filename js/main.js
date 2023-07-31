let mainPage = document.querySelector('#main-page');
let todoInput = mainPage.querySelector('.todo-input');
let todoInput2 = mainPage.querySelector('.todo-input2');
let submitBtn = mainPage.querySelector('.submit-btn')
let ul = mainPage.querySelector('.unorder-list');

let todoArray = [];
//let todoArray2 = [];


submitBtn.addEventListener('click', ()=>{
  
  if (todoInput.value == '') {
    alert('Please Write your Event Title')
  } else {
    todoArray.push(todoInput.value);
    //todoArray2.push(todoInput2.value);
    toDo();
    todoInput.value = '';
    todoInput2.value = '';
    //console.log(todoArray2);
  }
  
});

function toDo(){
  ul.innerHTML = '';
  todoArray.map((items)=>{
    ul.innerHTML += `<li class="list"><div class="message"><h4 class="todo-title">${items}</h4><p class="todo-details"></p></div><div class="btns"><button class="delete-btn"><i class="fa-solid fa-trash"></i></button><button class="edit-btn" class="w3-button w3-black"><i class="fa-regular fa-pen-to-square"></i></button></div></li>`;
    
  });
  
  
  
  let deleteBtn = mainPage.querySelectorAll('.delete-btn');
  let deleteArr = Array.from(deleteBtn);
  
  deleteArr.map((item, index)=>{
    item.addEventListener('click', ()=>{
      todoArray.splice(index, 1);
      toDo();
    });
  });
  
  let editBtn = mainPage.querySelectorAll('.edit-btn')
  let editArr = Array.from(editBtn);
  
  editArr.map((edit, index)=>{
    edit.addEventListener('click', ()=>{
      
      
      let id001 = mainPage.querySelector('#id01');
      let editInput1 = mainPage.querySelector('.editInput');
      let editInput2 = mainPage.querySelector('.editInput2');
      let editBtn = mainPage.querySelector('.editBtn');
      
      id001.style.display = 'block';
      
      editBtn.addEventListener('click', ()=>{
        
        id001.style.display = 'none';
      });
      
      
    });
  });
}
