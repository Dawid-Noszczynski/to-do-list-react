import "./style.css"

const Header = ({ title }) => (
    <header className="header">
        <h1 className="header__mainHeader">{title}</h1>
    </header>
);

export default Header;