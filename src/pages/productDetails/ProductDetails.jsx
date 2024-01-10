import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useCart } from '../../contextApi/CartContext';

const ProductDetails = () => {
  const productDetails = useLoaderData();
  const {handleAddToCart} = useCart()

  const { _id, image, name, brandName, type, price, shortDescription, rating } = productDetails;

  const addToCart = () => {
    // Make a POST request to add the product to the cart
    fetch('https://assignment-10-server-side-ecru.vercel.app/cart', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        productId: _id, // Assuming _id is the unique identifier for the product
        productName: name, // You can adjust the quantity as needed
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // Show a success message using Swal
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Product Added to your Cart',
            showConfirmButton: false,
            timer: 1500,
          });

          handleAddToCart(productDetails)
         
          // Call your context function to update the cart state
        }
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl flex justify-center items-center">
        <figure>
          <img src={image} alt="Shoes" className="h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">
            <span className="font-bold">Name: </span>
            {name}
          </h2>
          <p>
            <span className="font-bold">BrandName: </span>
            {brandName}
          </p>
          <p>
            <span className="font-bold">Type : </span>
            {type}
          </p>
          <p>
            <span className="font-bold">Price : $ </span>
            {price}
          </p>
          <p>
            <span className="font-bold">Details : </span>
            {shortDescription}
          </p>
          <p>
            <span className="font-bold">Rating : </span>
            {rating}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
