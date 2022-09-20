import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h3 className="header__title">
                    <Link to='/'>
                    Game of Thrones DB
                    </Link>
                    </h3>
                <ul className="header__nav header__links">
                    <li className="header__link">
                        <Link to='/characters'>Characters</Link>
                        </li>
                    <li className="header__link">
                        <Link to='/houses'>Houses</Link>
                        </li>
                    <li className="header__link">
                        <Link to='/books'>Books</Link>
                        </li>
                    </ul>    

            </div>
        </header>
    ) 
}

export default Header;