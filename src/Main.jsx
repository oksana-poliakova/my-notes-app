import { useState, useEffect } from "react";
import List from "./components/List";
import { v4 as uuidv4} from "uuid";

// This functional component represents the main task management system

function Main() {

    // 'tasks' holds the list of tasks, either from localStorage or an empty array if no tasks are stored

    const [tasks, setTasks] = useState(() => {
        const storedTodos = localStorage.getItem('tasks');
        if (!storedTodos) {
            return []
        } else { 
            return JSON.parse(storedTodos);
        }
    })

    // Function to add a task when the Enter key is pressed

    const addTask = (event) => {
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));

        if (event.key === 'Enter' && event.target.value != '') {
            setTasks([
                ...storedTodos, {
                    id: uuidv4(),
                    title: tasksTitle,
                    status: false
                }
            ]);
            setTasksTitle('');
        }
    }

    // Create a new Date object and get current month, day, and year

    const [tasksTitle, setTasksTitle] = useState('');
    const date = new Date();
    const monthsList = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];

    const currentMonth = monthsList[date.getMonth()];
    const currentDay = date.getDay();
    const currentYear = date.getFullYear();
    
    // useEffect to update localStorage whenever the tasks array changes
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="container">
            <h1>Note your tasks</h1>
            <span>{currentMonth + ' ' + currentDay + ', ' + currentYear}</span>
            <div className="input-filed">
                <input type="text" 
                    value={tasksTitle}
                    onChange={event => setTasksTitle(event.target.value)}  
                    onKeyDown={addTask}  
                />
                <label htmlFor="">Task name</label>
            </div>

            <List tasks={tasks}/>
        </div>
    );
}

export default Main;