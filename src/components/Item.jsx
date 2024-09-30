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

    const updateStatus = () => {
        setChecked(!checked);
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));

        storedTodos.map((item) => {
            if (item.id === id) {
                item.status = !checked;
            }
            return true;
        })
        localStorage.setItem('tasks', JSON.stringify(storedTodos));
    };

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
