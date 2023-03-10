import ProductCard from "./components/ProductCard";
import './style/ProductsList.css';
import { data } from '../../core/data/movies.js';
import EmptyProduct from "./components/EmptyProduct";
const ProductsList = () => {
    const moviesData = data;
    const watchNow = (id) => {
        console.log('we clicked in video id =', id);
    }
    //  a function that return movies
    const displayMovies = () => {
        if (moviesData.length === 0) {
            return <EmptyProduct />;
        }
        else {
            return moviesData.map(
                (movie) => {
                    /* Here he will ask you for a unique identifier for the element
                    in order not to reload every element when the list changes
                     he only want to change the item with the specific id*/
                    //  Here I also send some props it's like parameters that we send to function
                    return < ProductCard
                        key={movie.id}
                        id={movie.id}
                        name={movie.name}
                        description={movie.description}
                        image={movie.image}
                        watch={watchNow}
                    />;
                }
            )
        }
    }
    return <div className="products-list">{displayMovies()}</div>;
}

export default ProductsList;