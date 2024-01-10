import { Link } from "react-router-dom";

const CategoryProduct = ({ brandName, brandImage }) => {
    return (


        <div>
            
            <div className="   my-10 text-blue-500" >



                <Link to={`/products/${brandName}`} className="flex flex-col  justify-center items-center">
                    <h3>{brandName}</h3>
                    <img src={brandImage} alt="" className="w-40 h-40" />

                </Link>

            </div>
        </div>
    );
};

export default CategoryProduct;
