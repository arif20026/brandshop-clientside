import { useLoaderData } from "react-router-dom";
import Product from "../../Product/Product";

const Products = () => {
    const products = useLoaderData()
    return (
        <div>

            <p>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </p>





        </div>
    );
};

export default Products;