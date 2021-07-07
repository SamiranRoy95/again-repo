//selector
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-btn");
const t=document.querySelector(".todo-list");
const todoOftion=document.querySelector(".filter-todo");

//EventListener 
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener("click",addTodo);
t.addEventListener("click",delfunc);
todoOftion.addEventListener("click",filterTodo);






//function
function addTodo(event){
    //prevent form from submitting
event.preventDefault();
//todo div
const todoDiv=document.createElement("div");
todoDiv.classList.add("todo");
//Create LI

const newTodo=document.createElement("li");
newTodo.innerText=todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);
//ADD todo to localStorage
saveLocalTodos(todoInput.value);
//Check Mark Button
const combtn=document.createElement("button");
combtn.innerHTML="<i class='fas fa-check'></i>";
combtn.classList.add("com-btn");
todoDiv.appendChild(combtn);
//Check Delete button
const trashbtn=document.createElement("button");
trashbtn.innerHTML="<i class='fas fa-trash'></i>";
trashbtn.classList.add("trash-btn");
todoDiv.appendChild(trashbtn);
//apepend 
t.appendChild(todoDiv);
todoInput.value="";

}

function delfunc(e){

const item=e.target;
//delete todo
if(item.classList[0]==="trash-btn"){
    const todo=item.parentElement;
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend",function(){
        todo.remove();
    });
    
}
//Check mark
if(item.classList[0]==="com-btn"){
    const todo=item.parentElement;
    todo.classList.toggle("completed");
}
}


function filterTodo(e){
const todos=t.childNodes;
todos.forEach(function(item){
item.style.display="flex";
switch(e.target.value){
case "all":
 item.style.display="flex";
break;
case "completed":
if(item.classList.contains("completed")){
    item.style.display="flex";
}else{
    item.style.display="none";
}
break;
case "uncompleted":
    if(!item.classList.contains("completed")){

        item.style.display="flex";
    }else{
        item.style.display="none";
    }
}

})

}

function  saveLocalTodos(todo){

    //check ....Hey do i alrady have thing in there?
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];

    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}



    function getTodos(){
        //check ....Hey do i alrady have thing in there?
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];

    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){

        //todo div
const todoDiv=document.createElement("div");
todoDiv.classList.add("todo");
//Create LI

const newTodo=document.createElement("li");
newTodo.innerText=todo;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

//Check Mark Button
const combtn=document.createElement("button");
combtn.innerHTML="<i class='fas fa-check'></i>";
combtn.classList.add("com-btn");
todoDiv.appendChild(combtn);
//Check Delete button
const trashbtn=document.createElement("button");
trashbtn.innerHTML="<i class='fas fa-trash'></i>";
trashbtn.classList.add("trash-btn");
todoDiv.appendChild(trashbtn);
//apepend 
t.appendChild(todoDiv);
    });
    }
function removeLocalTodos(todo){
        //check ....Hey do i alrady have thing in there?
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];

    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
    
    }
    



    