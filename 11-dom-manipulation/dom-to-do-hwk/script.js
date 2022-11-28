
const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#task-list")
    const btn = document.querySelector("#btn")

    console.log(form);
btn.addEventListener('click', (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
        alert("enter item");
        return;
    }
    console.log(task,'input value');

    let newTask = document.createElement('div')
    newTask.innerText = task;

    
    newTask.addEventListener("click", event=>{
        event.target.remove()
    });
  
    
    let taskList = document.querySelector('.content');

    taskList.appendChild(newTask)

   let inputValue = e.target.inputValue
    
})  

