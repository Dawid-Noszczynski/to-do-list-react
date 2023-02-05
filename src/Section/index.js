import "./style.css"

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="taskContener">
        <header className="taskContener__headerContener">
            <h2 className="taskContener__header">{title}</h2>
            {extraHeaderContent}
        </header>
        <div className="taskContener__line"></div>
        {body}
    </section>
);

export default Section;