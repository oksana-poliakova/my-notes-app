import { useState, useEffect } from "react";
import List from "./components/List";
import { v4 as uuidv4} from "uuid";

function Main() {

    const [tasks, setTasks] = useState(() => {
        const storedTodos = localStorage.getItem('tasks');
        if (!storedTodos) {
            return []
        } else { 
            return JSON.parse(storedTodos);
        }
    })

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

    const [tasksTitle, setTasksTitle] = useState('');
    const date = new Date();
    const monthsList = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];

    const currentMonth = monthsList[date.getMonth()];
    const currentDay = date.getDay();
    const currentYear = date.getFullYear();
      
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