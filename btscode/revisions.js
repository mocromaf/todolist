const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');
const emoji = localStorage.getItem('emoji');

if (firstName && lastName && emoji) {

    const userInfoDiv = document.getElementById('userInfo');
  userInfoDiv.innerHTML = `<p>Bonjour, ${firstName} ${lastName} ${emoji}</p>`;
} else {
  window.location.href = 'index.html';  
}


document.getElementById('addTaskButton').addEventListener('click', function() {
  const newTask = document.getElementById('newTask').value;
  if (newTask) {

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    
    displayTasks();
    document.getElementById('newTask').value = ''; 
  } else {
    alert('Veuillez entrer une tâche.');
  }
});


function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; 

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', function() {
      deleteTask(index);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.splice(index, 1);  

  localStorage.setItem('tasks', JSON.stringify(tasks));

  displayTasks();
}

displayTasks();
