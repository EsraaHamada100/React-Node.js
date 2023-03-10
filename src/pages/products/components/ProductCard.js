import '../style/ProductCard.css';

const ProductCard = () => {
    return ( 
        <div className="product-card">
            <div className="card-top">
                <img 
                    src='https://picsum.photos/200'
                    alt='product-card'
                />
            </div>
            <div className="card-info">
                <h4 className="title">Black Adam</h4>
                <p className="info">Lorem ipsum dolor sit amet, consectetur adip,
                     sed do eiusmod tempor incididunt ut labore et</p>
                <button>Watch Now</button>
            </div>
        </div>
     );
}
 
export default ProductCard;