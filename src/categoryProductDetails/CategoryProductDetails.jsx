import { Link, useLoaderData } from "react-router-dom";
import { useCart } from "../contextApi/CartContext";

const CategoryProductDetails = () => {
    const products = useLoaderData()


    const { handleAddToCart } = useCart();



    return (
        <div>

            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full h-80 ">
                    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61p-Ylv5vtL._AC_UL320_.jpg" className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-80 ">
                    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71aXGgNCE9L._AC_SL1500_.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-80 ">
                    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Rda5QlygL._AC_SL1000_.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-80 ">
                    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/713N4SwTtKL._AC_SL1500_.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">

                {

                    products.map(product => <div key={product._id} className="grid  mx-10 my-10   items-center   " >

                        <img src={product.image} alt="" className="w-36 h-36" />
                        <p><span className="font-bold">Product Name:</span> {product.name}</p>
                        <p><span className="font-bold">Brand:</span> {product.brandName}</p>
                        <p><span className="font-bold">Type:</span> {product.type}</p>
                        <p><span className="font-bold">Price: $</span> {product.price}</p>
                        <p><span className="font-bold">Rating:</span> {product.rating}</p>
                        <Link to={`/productDetails/${product._id}`} ><button className="btn btn-primary mt-4">Details</button></Link>
                        <Link to={`/updateProduct/${product._id}`} ><button className="btn btn-primary mt-4">Update</button></Link>

                    </div>)

                }
            </div>





        </div>
    );
};

export default CategoryProductDetails;