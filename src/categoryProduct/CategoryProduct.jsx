import { Link } from "react-router-dom";

const CategoryProduct = ({ brandName ,brandImage}) => {
    return (
        <div className="border border-red-400 grid grid-cols-2 sm:mx-10 lg:mx-72 my-10 text-blue-500" >
            <Link to={`/${brandName}`} className="flex flex-col  justify-center items-center">
                <h3>{brandName}</h3>
                <img src={brandImage} alt="" className="w-40 h-40" />

                </Link>
            
        </div>
    );
};

export default CategoryProduct;
