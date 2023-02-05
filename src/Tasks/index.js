import "./style.css"

const Tasks = (props) => (
    <ul className="taskContener__list">
        {props.tasks.map(task => (
            <li className={`taskContener__listItem {task.done && props.hideDoneTask ? "taskContener__listItem--hidden" : ""}`}>
                <button className="taskContener__button taskContener__button--done"> {task.done ? "✔️" : ""} </button>
                <span className={`taskContener__task ${task.done ? "taskContener__task--done" : ""}`}> {task.content} </span>
                <button className="taskContener__button">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;