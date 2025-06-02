document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Floating animation for hero section
document.querySelector(".hero").style.animation = "fadeIn 1s ease-in-out";

// To-Do List Functionality
function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput) {
        let taskList = document.getElementById("taskList");
        let taskItem = document.createElement("li");
        taskItem.innerText = taskInput;
        taskItem.classList.add("floating-task");
        taskItem.onclick = function () { this.remove(); };
        taskList.appendChild(taskItem);
        document.getElementById("taskInput").value = "";
    }
}

// Floating effect on tasks
document.styleSheets[0].insertRule(`
    .floating-task {
        animation: floatEffect 2s infinite alternate;
    }
`, document.styleSheets[0].cssRules.length);

document.styleSheets[0].insertRule(`
    @keyframes floatEffect {
        from { transform: translateY(0px); }
        to { transform: translateY(5px); }
    }
`, document.styleSheets[0].cssRules.length);

