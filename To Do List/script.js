const taskDisplayContainer = document.querySelector(".task-display-container");
const inputForm = document.querySelector(".inputForm");
const userInput = document.querySelector(".userInputTasks");


let userTaskInput = "";
//hum pehle fetch kr rahe ki user ne pehle kaun se task store kr rakhe ha aur jo kr rahe unko 
//hum UI mein show krdenge
let taskInput = JSON.parse(localStorage.getItem("storedUserTasks")) || [];
getFromLocalStorage();//jitne task store ha pehle se unsab ko ui show karado

function getFromLocalStorage() {
  if (taskInput.length > 0) {
    taskInput.forEach((element) => {
      createTaskContainer(element);
    });
  }
}
userInput.addEventListener("input", () => {
  userTaskInput = userInput.value;
});

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createTaskContainer(userTaskInput);

  taskInput.push(userTaskInput);
  localStorage.setItem("storedUserTasks", JSON.stringify(taskInput));

  userInput.value = "";
  userTaskInput = "";
});


function createTaskContainer(userTaskInput) {
  //adding container

  let taskContainer = document.createElement("div");
  taskContainer.className = "taskContainer";
  taskDisplayContainer.appendChild(taskContainer);
  taskContainer.classList.add("active");

  //adding span, edit and delete btn inside container
  let taskText = document.createElement("span");
  taskText.innerText = userTaskInput;
  taskText.className = "taskText";
  taskContainer.appendChild(taskText);

  let editBtn = document.createElement("button");
  editBtn.innerText = "edit";
  editBtn.className = "editBtn";
  taskContainer.appendChild(editBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  deleteBtn.className = "deleteBtn";
  taskContainer.appendChild(deleteBtn);

  editBtn.addEventListener("click",()=>{
    taskText.innerHTML = `<del>${userTaskInput}</del>`
  })

  deleteBtn.addEventListener("click", () => {
    taskContainer.classList.remove("active");

    taskInput = taskInput.filter((element) => {
      if (element !== userTaskInput) {
        return element;
      }
    });
    localStorage.setItem("storedUserTasks", JSON.stringify(taskInput));
  });
}
