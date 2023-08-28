import './find.css';

const Find = () => {
    return (
        <div className="find">
        <div className="find__container">
            <form action="#" className="find__form">
                <div className="form__seek">
                    <div htmlFor="seek">Lookiing for</div>
                    <input name="seek" type="text" placeholder="start typing here..."/>
                </div>
                <div className="form__filter">
                    <div className="filter__label">Or filter</div>
                    <button type="submit" className="filter__button">Brazil</button>
                    <button type="submit" className="filter__button">Kenya</button>
                    <button type="submit" className="filter__button">Columbia</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Find;
