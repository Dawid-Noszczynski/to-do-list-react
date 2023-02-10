import { useState } from "react";
import "./style.css"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent === "") {
            return;
        };

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit} >
            <input
                value={newTaskContent}
                className="form__inputField"
                name="newTask"
                placeholder=" Enter your task here"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Add Task</button>
        </form>
    );
};

export default Form;