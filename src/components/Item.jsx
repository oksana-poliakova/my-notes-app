import { useState, useEffect } from "react";

// This functional component represents a task item in the list

function Item({ title, id, status }) {
    const [checked, setChecked] = useState(status);
    const [classes, setClasses] = useState(["todo"]); 
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let updatedClasses = ["todo"];
        if (checked) {
        updatedClasses.push("status");
        }
        setClasses(updatedClasses);
    }, [checked]);

    // Function to update the 'checked' status and synchronize it with localStorage

    const updateStatus = () => {
        setChecked(!checked);
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));

        storedTodos.map((item) => {
            if (item.id === id) {
                item.status = !checked;
            }
            return true;
        })
        // Store the updated task list back in localStorage
        localStorage.setItem('tasks', JSON.stringify(storedTodos));
    };

    // Function to remove the task from the list and update localStorage

    const removeElement = () => {
        setVisible(prev => !prev);
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));
        
        let removeTodos = storedTodos.filter(item => {
            if(item.id != id) {
                return true;
            } else {
                return false;
            }
        });
        localStorage.setItem('tasks', JSON.stringify(removeTodos));
    }

    // Render the task item, only if it is visible
    
    return (
        <>
            {visible && (
                <li className={classes.join(" ")}>
                <label>
                    <input type="checkbox" checked={checked} onChange={updateStatus} />
                    <span>{title}</span>
                    <i className="material-icons red-text"
                        onClick={removeElement}
                    >X
                    </i>
                </label>
                </li>
            )}
        </>
    );
}

export default Item;
