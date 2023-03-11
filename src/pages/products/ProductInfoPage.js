import { useParams, useSearchParams } from "react-router-dom";

const ProductInfoPage = () => {
    // HOOKS => helper to get the parameters from the route
    let {id} = useParams;
    // searchParams is used to get the query parameters
    // setSearchParams is used to set the query parameters
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("size"));
    return ( 
        <div>
            <h1>Product Info</h1>
        </div>
     );
}
 
export default ProductInfoPage;