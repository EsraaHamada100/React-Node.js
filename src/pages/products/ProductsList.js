import ProductCard from "./components/ProductCard";
import './style/ProductsList.css';
import { data } from '../../core/data/movies.js';
const ProductsList = () => {
    const moviesData = data;
    //  a function that return movies
    const displayMovies = ()=>{
        return moviesData.map(
            (movie) => {
                /* Here he will ask you for a unique identifier for the element
                in order not to reload every element when the list changes
                 he only want to change the item with the specific id*/
                return < ProductCard key={movie.id}/>;
            }
        )
    }
    return (

        <div className="products-list">
            {
                /* You should but any code inside jsx in {} */
                displayMovies()
            }

        </div>
    );
}

export default ProductsList;