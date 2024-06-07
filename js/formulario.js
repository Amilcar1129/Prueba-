document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
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
        taskForm.reset();
    }
});
