import React from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/useCartStore";

const Cart = () => {
   const {
  cartItems,
  removeFromCart,
  incrementQty,
  decrementQty,
} = useCartStore();
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">

      
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-base sm:text-lg">
          Your cart is empty 🛒 <br />

          <button
            onClick={() => navigate("/")}
            className="w-full sm:w-1/2 mx-auto mt-4 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Go to Shipping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

         
          <div className="lg:col-span-2 space-y-4 md:space-y-5">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 bg-white shadow-md rounded-xl p-4"
              >

                
                <img
                  src={item.thumbnail}
                  className="w-full sm:w-24 h-44 sm:h-24 object-cover rounded-lg"
                />

                
                <div className="flex-1">
                  <h3 className="font-semibold text-base md:text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Price: ${item.price}
                  </p>

                  <p className="text-gray-500 text-sm">
                    Qty: <b>{item.qty}</b>
                  </p>

                  <p className="font-medium text-green-600 text-sm md:text-base">
                    Subtotal: ${item.price * item.qty}
                  </p>
                </div>

                
                <div className="w-full sm:w-auto">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-2xl font-bold transition"
                  >
                    Remove
                  </button>
                  <div className="mt-10 px-5 py-1.5 rounded-2xl bg-gray-400">
                    <div className="flex items-center gap-x-5">
                      <h4 onClick={() => decrementQty(item.id)} className="font-bold text-black text-2xl ">-</h4>
                      <h4 className="font-bold text-black text-2xl ">{item.qty}</h4>
                      <h4 onClick={() => incrementQty(item.id)} className="font-bold text-black text-2xl ">+</h4>
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>

          
          <div className="bg-white shadow-lg rounded-xl p-5 md:p-6 h-fit lg:sticky lg:top-6">

            <h2 className="text-lg md:text-xl font-bold mb-5">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3 text-sm md:text-base">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>

            <div className="flex justify-between mb-3 text-sm md:text-base">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-base md:text-lg font-bold mb-5">
              <span>Total</span>
              <span>${total}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Checkout
            </button>

          </div>

        </div>
      )}

      
      <button
        onClick={() => navigate("/NewArrivals")}
        className="hidden w-full sm:w-1/2 mx-auto mt-5 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
      >
        More Shipping
      </button>

    </div>
  );
  
};

export default Cart;