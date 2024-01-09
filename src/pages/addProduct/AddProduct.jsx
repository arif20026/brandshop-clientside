import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const name = form.name.value
        const brandName = form.brandName.value
        const brandImage = form.brandImage.value
        const type = form.type.value
        const price = form.price.value
        const shortDescription = form.shortDescription.value
        const rating = form.rating.value

        const newProduct = {image,name,brandName,brandImage,type,price,shortDescription,rating}

        console.log(newProduct)

        // sending newProduct to server

        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{'content-type' : 'application/json'},
            body:JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Product Added",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        
        })

    }
    return (
        <div>

            <form className="card-body" onSubmit={handleAddProduct}>
              <div className=" grid grid-cols-2 gap-4">
              <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="image" name="image" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" placeholder="brand name" name="brandName" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Image</span>
                    </label>
                    <input type="text" placeholder="brand image" name="brandImage" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <input type="text" placeholder="Type" name="type" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <input type="text" placeholder="Short description" name="shortDescription" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />
                </div>
              </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Add Product" className="btn btn-primary" />
                </div>
            </form>

        </div>
    );
};

export default AddProduct;