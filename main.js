/*
Students Taskes:
 Use Sweet Alert If Input Is Empty
 [ggggggggggggggggggggggggggggg8 2] Check IF Task Is Exist
 [3] Create Delete All Tasks Button
 [4] Create Finsh All Tasks Button
*/

//Setting Up Vaiables
let thaInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let taskesContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".task-count span");
let tasksCompleted = document.querySelector(".taskes-completed span");
const tasksInStorage = JSON.parse(localStorage.getItem("tasks")) || [];

//Foucs On Input Field

// localStorage.setItem("hello", 'world')
// localStorage.setItem("hello-2", JSON.stringify(['wor', 'lddd']))
// localStorage.setItem("hello-3", {first: 'wor', second: 'lldd'})
// localStorage.setItem("hello-4", false)

// console.log('localStorage.getItem("hello-2") = ', localStorage.getItem("hello-2"))
// console.log('localStorage.getItem("hello-2") = ', JSON.parse(localStorage.getItem("hello-2")))

tasksInStorage.forEach(taskItem => {
    addTaskToUI(taskItem)
});

window.onload = function () {
  thaInput.focus();
};
//Addind The Task
theAddButton.onclick = function () {
  //If Input Is Empty
  if (thaInput.value === "") {
    console.log("No Value");
  } else {
    let notasksMsg = document.querySelector(".no-tasks-message");

    //Check If Span With No Task Massage Is Exist
    if (document.body.contains(document.querySelector(".no-tasks-message"))) {
      //Remove No Task Massage
      notasksMsg.remove();
    }

    //Create Span Element
    let mainSpan = document.createElement("span");

    //Create Delet Button
    let DeleteButton = document.createElement("span");

    //Create The MainSpan Text
    let text = document.createTextNode(thaInput.value);

    //create the Delete Button Text
    let deleteText = document.createTextNode("Delete");

    //Add Text To Span
    mainSpan.appendChild(text);

    //Add Class To Spana
    mainSpan.className = "task-box";

    //Add Text To Delete Button
    DeleteButton.appendChild(deleteText);

    //Add Class To Delete Button

    DeleteButton.className = "delete";

    //Add Dlete Butoon To Main Span

    mainSpan.appendChild(DeleteButton);

    //Add The Task To Container
    taskesContainer.appendChild(mainSpan);
    
    // Get Array from localstorage
    tasksInStorage.push(thaInput.value);
    localStorage.setItem('tasks', JSON.stringify(tasksInStorage));
    
    //Empty The Input
    thaInput.value = "";
    //Foucus On Field
    thaInput.focus();

    //calclat taska
    CalculateTasks();

  }
};

document.addEventListener("click", function (e) {
  //Delete Task
  if (e.target.className == "delete") {
    //Remove Current Task
    e.target.parentNode.remove();

    //Check Number OF Taskes Inside The Container
    if (taskesContainer.childElementCount == 0) {
      craeteNoTasks();
    }
  }
  //Finsh Task
  if (e.target.classList.contains("task-box")) {
    //Toggel Class Finshed
    e.target.classList.toggle("finished");
  }

  CalculateTasks();
});

// Function To Create No Tasks Massage
function craeteNoTasks() {
  //Creat Massage Span Element
  let msgSpan = document.createElement("span");
  //Creat The TEXT Massage
  let msgText = document.createTextNode("No Tasks To Show");
  //Add Text To Massage SPAN Element
  msgSpan.appendChild(msgText);
  //Add Class TO Massage Span
  msgSpan.className = "no-tasks-message";
  //Append The Massage SPan Element To the CONTAINER
  taskesContainer.appendChild(msgSpan);
}

//function To Calculate tasks
function CalculateTasks() {
  //Calculate All Tasks
  tasksCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;

  //Calculate Commpleted Tasks
  tasksCompleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}

function addTaskToUI(textParmeter){
        //Create Span Element
        let mainSpan = document.createElement("span");

        //Create Delet Button
        let DeleteButton = document.createElement("span");
    
        //Create The MainSpan Text
        let text = document.createTextNode(textParmeter);
    
        //create the Delete Button Text
        let deleteText = document.createTextNode("Delete");
    
        //Add Text To Span
        mainSpan.appendChild(text);
    
        //Add Class To Spana
        mainSpan.className = "task-box";
    
        //Add Text To Delete Button
        DeleteButton.appendChild(deleteText);
    
        //Add Class To Delete Button
    
        DeleteButton.className = "delete";
    
        //Add Dlete Butoon To Main Span
    
        mainSpan.appendChild(DeleteButton);
    
        //Add The Task To Container
        taskesContainer.appendChild(mainSpan);
        //Empty The Input
        thaInput.value = "";
        //Foucus On Field
        thaInput.focus();
    
        //calclat taska
        CalculateTasks();
}