import "./style.css"

const Buttons = ({ tasks, hideDoneTask }) => {
    const taskLength = tasks.length;

    if (taskLength > 0)

        return (

            <div className="taskContener__buttons">
                <button className="taskContener__headerButton"> {hideDoneTask && tasks.some(({ done }) => done) ? "Show" : "Hide"} all done tasks </button>
                <button className="taskContener__headerButton" disabled={tasks.every(({ done }) => done)}>Mark all done</button>
            </div>
        )
};

export default Buttons;