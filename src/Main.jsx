import { useState, useEffect } from "react";
import List from "./components/List";

function Main() {

    const [tasks, setTasks] = useState([{
        id: 0,
        title: "Code review",
        status: false
    }]);

    return (
        <div className="container">
            <h1>Note your tasks</h1>

            <div className="input-filed">
                <input type="text" />
                <label htmlFor="">Task name</label>
            </div>

            <List tasks={tasks}/>
        </div>
    );
}

export default Main;