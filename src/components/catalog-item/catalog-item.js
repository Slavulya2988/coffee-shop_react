import './catalog-item.css'
import coffee from './coffe.jpg';

const CatalogItem = (props) => {
    const {productName, productType, productWeight, country, price} = props;
    return (
        <a href="#" className="catalog__item">
                        <div className="catalog__item-img">
                            <img src={coffee} alt=""/>
                        </div>
                        <div className="catalog_item-header product">
                            <p> <span>{productName}</span></p>
                            <p>{productType}</p>
                            <p>{productWeight}</p>

                        </div>
                        <div className="catalog__item-country">
                            {country}
                        </div>
                        <div className="catalog__item-price">
                            {price + '$'}
                        </div>
                    </a>
    )
}

export default CatalogItem;
