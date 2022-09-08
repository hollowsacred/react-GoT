

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h3 className="header__title">
                    <a href="#">
                    Game of Thrones DB
                    </a>
                    </h3>
                <ul className="header__nav header__links">
                    <li className="header__link"><a href="#">Characters</a></li>
                    <li className="header__link"><a href="#">Houses</a></li>
                    <li className="header__link"><a href="#">Books</a></li>
                    </ul>    

            </div>
        </header>
    ) 
}

export default Header;