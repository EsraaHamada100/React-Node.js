import ProductCard from "./components/ProductCard";
import './style/ProductsList.css';
import { data } from '../../core/data/movies.js';
const ProductsList = () => {
    const moviesData = data;
    //  a function that return movies
    const displayMovies = () => {
        const watchNow = (id)=>{
            console.log('we clicked in video id =',id);
        }
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