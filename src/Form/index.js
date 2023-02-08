import "./style.css"

const Form = () => (
    <form className="form">
        <input
            className="form__inputField"
            name="newTask"
            placeholder=" Enter your task here"
        />
        <button className="form__button">Add Task</button>
    </form>
)

export default Form;