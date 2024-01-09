import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const products = useLoaderData()
    const {_id,image,name,brandName,brandImage,type,price,shortDescription,rating} = products

    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target
        const updatedImage = form.image.value
        const updatedName = form.name.value
        const updatedBrandName = form.brandName.value
        const updatedBrandImage = form.brandImage.value
        const updatedType = form.type.value
        const updatedPrice = form.price.value
        const updatedShortDescription = form.shortDescription.value
        const updatedRating = form.rating.value

        const updatedProduct = { updatedImage, updatedName, updatedBrandName,updatedBrandImage, updatedType, updatedPrice, updatedShortDescription, updatedRating }

        console.log(updatedProduct)

        fetch(`http://localhost:5000/products/${_id}`,{
            method:'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(updatedProduct)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){

                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Product Details Updated",
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        })
        
    }

    return (
        <div>

            <form className="card-body" onSubmit={handleUpdateProduct}>
                <div className=" grid grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="image" name="image" className="input input-bordered" required defaultValue={image} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required defaultValue={name} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" placeholder="brand name" name="brandName" className="input input-bordered" required defaultValue={brandName} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Image</span>
                        </label>
                        <input type="text" placeholder="brand image" name="brandImage" className="input input-bordered" required defaultValue={brandImage} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <input type="text" placeholder="Type" name="type" className="input input-bordered" required defaultValue={type}/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered" required defaultValue={price}/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <input type="text" placeholder="Short description" name="shortDescription" className="input input-bordered" required defaultValue={shortDescription} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required defaultValue={rating} />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Update Product" className="btn btn-primary" />
                </div>
            </form>

        </div>
    );
};

export default UpdateProduct;