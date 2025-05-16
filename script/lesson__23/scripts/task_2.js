"use strict";

// Задача 2.
// Зберігати у пам'яті список справ, які користувачу треба виконати (зберігати у localStorage).
// Періодично випадковим чином вибирати якусь з справ і виводити користувачу
// (з використанням confirm).
// Якщо користувач натискає на «Ок», то видаляти цю задачу.

if (confirm("Почати тестування?")) {
    const resultWrapper = document.querySelector(".result-wrapper");
    let currentTask = null; // Для зберігання поточної випадкової задачі

    function initializeTasks(tasksArray) {
        if (!localStorage.getItem("todoTasks")) {
            localStorage.setItem("todoTasks", JSON.stringify(tasksArray));
        }
    }

    function loadTasks() {
        const saved = localStorage.getItem("todoTasks");
        return saved ? JSON.parse(saved) : [];
    }

    function saveTasks(tasks) {
        localStorage.setItem("todoTasks", JSON.stringify(tasks));
        updateTaskListDisplay();
    }

    function updateTaskListDisplay() {
        const tasks = loadTasks();
        resultWrapper.innerHTML = `
            <div class="task-list-container">
                <h3>Список задач:</h3>
                <ul class="task-list">
                    ${tasks
                        .map(
                            (task, index) =>
                                `<li class="task-item">
                            <span class="task-text">${task}</span>
                            <button class="task-complete-btn" onclick="completeTask(${index})">✓</button>
                        </li>`
                        )
                        .join("")}
                </ul>
            </div>
        `;
    }

    function completeTask(index) {
        const tasks = loadTasks();
        tasks.splice(index, 1);
        saveTasks(tasks);
        if (currentTask === tasks[index]) {
            currentTask = null;
        }
    }

    function promptRandomTask() {
        const tasks = loadTasks();

        if (tasks.length === 0) {
            clearInterval(taskInterval);
            alert("Усі задачі виконано!");
            resultWrapper.innerHTML = "<p>Усі задачі виконано!</p>";
            return;
        }

        const index = Math.floor(Math.random() * tasks.length);
        const task = tasks[index];
        currentTask = task;

        if (confirm(`Задача:\n"${task}"\n\nВиконати зараз?`)) {
            tasks.splice(index, 1);
            saveTasks(tasks);
            currentTask = null;
        }
    }

    const tasksList = [
        "Випити каву",
        "Відповісти на важливі листи",
        "Навести лад у поштовій скриньці",
        "Зробити 10 віджимань",
        "Відкрити вікно для провітрювання",
        "Випити води",
        "Зробити 10 присідань"
    ];

    initializeTasks(tasksList);
    updateTaskListDisplay();

    const taskInterval = setInterval(promptRandomTask, 3000);
}
