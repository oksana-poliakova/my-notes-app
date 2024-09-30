import { useState, useEffect } from "react";
import List from "./components/List";
import { v4 as uuidv4} from "uuid";

function Main() {

    const [tasks, setTasks] = useState([{
        id: 0,
        title: "Code review",
        status: false
    }]);

    const addTask = (event) => {
        if (event.key === 'Enter' && event.target.value != '') {
            setTasks([
                ...tasks, {
                    id: uuidv4(),
                    title: tasksTitle,
                    status: false
                }
            ]);
            setTasksTitle('');
        }
    }

    const [tasksTitle, setTasksTitle] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="container">
            <h1>Note your tasks</h1>

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