import "./style.css"

const Form = () => (
    <form className="formContener__form">
        <input className="formContener__inputField" name="newTask"
            placeholder=" Enter your task here" />
        <button className="formContener__button">Add Task</button>
    </form>
)

export default Form;