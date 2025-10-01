import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { cartItems, flower_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const handleCheckout = () => {
    let message = "Hi, I'd like to place an order for";
    let total = 0;

    flower_list.forEach(item => {
      const qty = cartItems[item._id];
      if (qty > 0) {
        const itemTotal = item.price * qty;
        total += itemTotal;
        message += ` ${item.name} x${qty} — ₦${itemTotal}`;
      }
    });

     message += ` Total: ₦${total}`;
     const encodedMessage = encodeURIComponent(message);
     const phoneNumber = "2349016517432";
     const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
     window.open(url, "_blank");


  }

  return (
    <div className="bg-white">
      <div className="flex justify-center py-2.5">
        <h1 className="text-4xl font-bold bg-pink-100 text-center mb-12 w-full max-w-[69rem] py-4">
          <span className="text-pink-500">Cart</span>{" "}
          <span className="text-gray-900">Page</span>
        </h1>
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-15">
        {/* Header Row */}
        <div className="grid grid-cols-6 items-center text-gray-800 text-xs sm:text-sm font-semibold py-2 border-b">
          <p className="text-center">Items</p>
          <p className="text-center">Title</p>
          <p className="text-center">Price</p>
          <p className="text-center">Quantity</p>
          <p className="text-center">Total</p>
          <p className="text-center">Remove</p>
        </div>

        {/* Cart Items */}
        {flower_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="grid grid-cols-6 items-center gap-2 sm:gap-4 text-gray-900 text-xs sm:text-sm py-4 border-b" >
                {/* Item Image */}
                <div className="flex justify-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                </div>
                <p className="text-center">{item.name}</p>
                <p className="text-center">₦{item.price}</p>
                <p className="text-center">{cartItems[item._id]}</p>
                <p className="text-center">₦{item.price * cartItems[item._id]} </p>
                <button onClick={()=>removeFromCart(item._id)} className="cursor-pointer font-bold text-center">X</button>
              </div>
            );
          }
        })}
      </div>

      <div className="px-16 mt-20 flex justify-between gap-[max(12vw,20px)]">
        <div className="flex flex-1 flex-col gap-5">
          <h2>Cart Total</h2>
          <div>
            <div className="flex justify-between text-gray-900 border-b">
              <p>SubTotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <div className="flex justify-between text-gray-900">
              <p>Total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
          </div>
          <button onClick={handleCheckout} className="inline-block cursor-pointer bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
