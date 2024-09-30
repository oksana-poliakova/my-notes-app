import { useState, useEffect } from "react";

function Item({ title, id, status }) {
    const [checked, setChecked] = useState(status);
    const [classes, setClasses] = useState(["todo"]); 

    useEffect(() => {
        let updatedClasses = ["todo"];
        if (checked) {
        updatedClasses.push("status");
        }
        setClasses(updatedClasses);
    }, [checked]);

    const updateStatus = () => {
        setChecked(!checked);
    };

    return (
        <li className={classes.join(" ")}>
        <label>
            <input type="checkbox" checked={checked} onChange={updateStatus} />
            <span>{title}</span>
            <i className="material-icons red-text">X</i>
        </label>
        </li>
    );
}

export default Item;
