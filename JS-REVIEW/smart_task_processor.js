
/*
You’ll build a small system to:
Manage tasks
Process tasks
Analyze tasks
*/

const tasks = [
  { id: 1, title: "Learn JS", completed: true, hours: 2 },
  { id: 2, title: "Practice React", completed: false, hours: 3 },
  { id: 3, title: "Build Project", completed: true, hours: 5 },
  { id: 4, title: "Read Docs", completed: false, hours: 2 }
];

// 1. Get All Task Titles
console.log(tasks.map(task => task.title));

// 2. Get Completed Tasks
console.log(tasks.filter(task => task.completed));

// 3. Get Total Hours
console.log(tasks.reduce((acc, curr) => acc + curr.hours ,0));

// 4. Get Incomplete Task Titles
console.log(tasks.filter(task => !task.completed).map(task => task.title));

// 5. Add New Task (Function)
const addTask = (tasks, newTask) => {
    return [...tasks, newTask];
}
console.log(addTask(tasks, { id: 5, title: "English Practice", completed: false, hours: 1 }));

// 6. Mark Task as Completed
const markCompleted = (tasks, taskId) => {
    return tasks.map(task => 
        task.id === taskId 
            ? { ...task, completed: true } 
            : task
    );
}
console.log(markCompleted(tasks, 4));
;

// 7. Bonus (Callback Use)
const processTasks = (tasks, callback) => {
    const result = callback(tasks);
    return result;
}
processTasks(tasks, tasks => tasks.map(t => t.title));
processTasks(tasks, tasks => tasks.filter(t => t.completed));