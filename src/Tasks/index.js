import "./style.css"

const Tasks = ({ tasks }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li className={`tasks__listItem {task.done && props.hideDoneTask ? "tasks__listItem--hidden" : ""}`}>
                <button className="tasks__button tasks__button--done"> {task.done ? "✔️" : ""} </button>
                <span className={`tasks__task ${task.done ? "tasks__task--done" : ""}`}> {task.content} </span>
                <button className="tasks__button">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;