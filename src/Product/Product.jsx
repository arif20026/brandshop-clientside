import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, image, name, brandName } = product

   

    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl my-8  border border-red-500  ">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h1>{_id}</h1>
                    <img src={image} alt="" />
                    <h1  className="text-3xl font-bold">{name}</h1>
                    <h1 className="text-3xl font-bold">{brandName}</h1>
                    <div className="card-actions justify-end">
                        <Link to={`/updateProduct/${_id}`}> <button className="btn bg-red-500" >Update</button></Link>
                        
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Product;