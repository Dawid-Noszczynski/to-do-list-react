import "./style.css"

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <header className="section__headerContainer">
            <h2 className="section__header">{title}</h2>
            {extraHeaderContent}
        </header>
        <div className="section__line"></div>
        {body}
    </section>
);

export default Section;