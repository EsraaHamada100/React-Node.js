import '../style/ProductCard.css';
import {Link} from 'react-router-dom'
const ProductCard = (props) => {
    return ( 
        <div className="product-card">
            <div className="card-top">
                <img 
                    src={props.image}
                    alt='product-card'
                />
            </div>
            <div className="card-info">
                <h4 className="title">{props.name}</h4>
                <p className="info">{props.description}</p>
                <button >
                    <Link to={'/product-info/'+ props.id}>Watch Now</Link>
                </button>
            </div>
        </div>
     );
}
 
export default ProductCard;