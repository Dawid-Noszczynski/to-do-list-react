import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    const taskLength = tasks.length;

    if (taskLength > 0)
        return (
            <div className="buttons">
                <button onClick={toggleHideDone} className="buttons__headerButton"> {hideDone && tasks.some(({ done }) => done) ? "Show" : "Hide"} all done tasks </button>
                <button onClick={setAllDone} className="buttons__headerButton" disabled={tasks.every(({ done }) => done)}>Mark all done</button>
            </div>
        )
};

export default Buttons;