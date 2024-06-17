document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDate');
    const categorySelect = document.getElementById('category');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value;
        const dueDate = dueDateInput.value;
        const category = categorySelect.value;

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText} (${category}) - Due: ${dueDate}</span>
            <div>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
        dueDateInput.value = '';
        categorySelect.value = 'work';

        li.querySelector('.complete').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete').addEventListener('click', () => {
            li.remove();
        });
    }
});
