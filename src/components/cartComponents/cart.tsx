
import { Link } from "react-router-dom";
import { useCart } from "../../lib/cartContext";
const Cart = () => {

  const {cart}=useCart();

  if(cart.length==0){
    return(
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
        <p>Your Cart is Empty</p>
        <Link to='/'>
            <button>Start Shopping Now</button>
        </Link>
       
      </div>
    )
  }
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      <div className="flex gap-8">
        {/* LEFT: Cart Items */}
        <div className="flex-1 space-y-6">
          
          {cart.map((item)=>(
            <div className="flex items-center justify-between border-b pb-6">
            <div className="flex gap-4">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="w-24 h-24 rounded-md"
              />

              <div>
                <h2 className="font-medium">{item.name}</h2>
                <p className="mt-1">{item.price}</p>
                <p className="text-white-600 text-sm mt-2">Quantity:{item.quantity}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select className="border rounded px-2 py-1 text-black bg-white">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <button className="text-white-400 hover:text-black">✕</button>
            </div>
          </div>
          ))}

        </div>

        {/* RIGHT: Order Summary */}
        <div className="w-80 bg-black-100 p-6 rounded-lg h-fit">
          <h2 className="text-lg font-medium mb-4">Order summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$99.00</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping estimate</span>
              <span>$5.00</span>
            </div>

            <div className="flex justify-between">
              <span>Tax estimate</span>
              <span>$8.32</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-medium">
              <span>Order total</span>
              <span>$112.32</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;