
// function addTask(){


// var box =document.querySelector('.box').value;

// var container = document.createElement('div');
// container.className = "container";

// var taskItem=document.querySelector('.taskItem')

// var taskList = document.createElement('div');
// taskList.className = "taskList";

// var pElement = document.createElement('p');
// pElement.textContent = box;



// taskList.appendChild(pElement);
// taskItem.appendChild(taskList);

// }

var object = [{
    Task:"Hello World"
},
{
    Task:"Learn JavaScript"
},
{
    Task:"Nice to meet you"
},
{
    Task:"Have a Great Day"
},
{
    Task:"Good Day"
},
{
    Task:"Good Bye"
},
{
    Task:"Hello World"
},
{
    Task:"Learn JavaScript"
},
{
    Task:"Nice to meet you"
},
{
    Task:"Have a Great Day"
},
{
    Task:"Good Day"
},
{
    Task:"Good Bye"
},
{
    Task:"Good Morning!"
},
{
    Task:"Nice to Meet you"
},
{
    Task:"Hello World"
},
{
    Task:"Learn JavaScript"
},
{
    Task:"Nice to meet you"
},
{
    Task:"Have a Great Day"
},
{
    Task:"Good Day"
},
{
    Task:"Good Bye"
},
{
    Task:"Hello World"
},
{
    Task:"Learn JavaScript"
},
{
    Task:"Nice to meet you"
},
{
    Task:"Have a Great Day"
},
{
    Task:"Good Day"
},
{
    Task:"Good Bye"
}]

object.forEach(serve=>{

var taskItem = document.querySelector('.taskItem');
var TaskInfo = document.querySelector('.TaskInfo');

var taskList = document.createElement("div");
taskList.className= "taskList";

var pElement = document.createElement("p");
pElement.textContent = serve.Task;


taskList.appendChild(pElement);

taskItem.appendChild(taskList);

})

// var container = document.createElement("div");
// container.className = "container";


// var taskItem = document.createElement("div");
// taskItem.className = "taskItem";
// console.log(taskItem);

// var taskList = document.createElement("div");
// taskList.className= "taskList";

// var pElement = document.createElement("p");
// pElement.textContent = object[1].Task;

// container.appendChild(taskItem);
// container.appendChild(taskList);
// taskList.appendChild(pElement);

// var taskInfo = document.getElementById("array");

// taskInfo.appendChild(taskList);