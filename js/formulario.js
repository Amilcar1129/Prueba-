document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    let tasks = [];

    taskForm.addEventListener('submit', addTask);

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
                    <!-- Acciones aquí -->
                </td>
            `;
            taskList.appendChild(row);
        });
    }
});
