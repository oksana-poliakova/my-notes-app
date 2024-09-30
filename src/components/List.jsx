import Item from "./Item";

// This functional component represents a list of tasks

function List({tasks}) {
    
    return (
        <ul className="list-items">
            {tasks.map(item => <Item key={item.id} {...item} />)}
        </ul>
    );
}

export default List;