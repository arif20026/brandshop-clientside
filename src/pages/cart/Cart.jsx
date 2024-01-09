import { useCart } from "../../contextApi/CartContext";

const Cart = () => {

    const { cart, handleRemoveFromCart } = useCart()

    const handleDelete = (productId) => {
     
        // Call the handleRemoveFromCart function with the productId
        handleRemoveFromCart(productId);
    };

    return (
        <div>

            <ul >
                {
                    cart.map(cartItem => (<li key={cartItem._id}> {cartItem.name} <button className="btn btn-primary" onClick={() => handleDelete(cartItem._id)}>X</button></li>))
                }
            </ul>
        </div>
    );
};

export default Cart;