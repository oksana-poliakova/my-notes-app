import Item from "./Item";

function List({tasks}) {
    
    return (
        <ul className="list-items">
            {tasks.map(item => <Item key={item.id} {...item} />)}
        </ul>
    );
}

export default List;