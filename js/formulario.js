document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    let tasks = [];

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', updateTask);
    taskList.addEventListener('click', deleteTask);

    function addTask(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due-date').value;
        const priority = document.getElementById('priority').value;
        const task = {
            id: Date.now(),
            title,
            description,
            dueDate,
            priority,
            status: 'Pendiente'
        };
        tasks.push(task);
        displayTasks();
        taskForm.reset();
    }

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>${task.dueDate}</td>
                <td>${task.priority}</td>
                <td>${task.status}</td>
                <td>
                    <button class="complete" data-id="${task.id}">Marcar como ${task.status === 'Pendiente' ? 'Completa' : 'Pendiente'}</button>
                    <button class="delete" data-id="${task.id}">Eliminar</button>
                </td>
            `;
            taskList.appendChild(row);
        });
    }

    function updateTask(e) {
        if (e.target.classList.contains('complete')) {
            const id = e.target.getAttribute('data-id');
            tasks = tasks.map(task => task.id == id ? { ...task, status: task.status === 'Pendiente' ? 'Completa' : 'Pendiente' } : task);
            displayTasks();
        }
    }

    function deleteTask(e) {
        if (e.target.classList.contains('delete')) {
            const id = e.target.getAttribute('data-id');
            tasks = tasks.filter(task => task.id != id);
            displayTasks();
        }
    }
});
