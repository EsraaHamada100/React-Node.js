import '../style/ProductCard.css';

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
                <button onClick={()=>{
                    props.watch(props.id);
                }}>
                    Watch Now
                </button>
            </div>
        </div>
     );
}
 
export default ProductCard;