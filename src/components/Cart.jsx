import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/Cartslice";

const Cart = () => {
  const cartitems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(
    {}
    // Object.fromEntries(cartitems.map((item) => [item.id, 1]))
  );

  const handleremove = (id) => {
    dispatch(remove(id));

    setQuantity((preQuantity) => {
      const updatedQuantity = { ...preQuantity };
      delete updatedQuantity[id];
      return updatedQuantity;
    });
  };

  const handleincrement = (id) => {
    setQuantity((preQuantity) => ({
      ...preQuantity,
      [id]: (preQuantity[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantity((preQuantity) => ({
      ...preQuantity,
      [id]: Math.max((preQuantity[id] || 0) - 1, 0),
    }));
  };

  const calculateSum = (items) => {
    return (items.price * (quantity[items.id] || 1)).toFixed(2);
  };

  const calculateTotal = () => {
    return cartitems
      .reduce((total, items) => {
        return total + parseFloat(calculateSum(items));
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      <div className="my-3">
        {cartitems.map((items) => (
          <div className=" flex w-auto mx-2 my-8">
            <div className=" w-[40%] p-2 lg:w-[30%]">
              <div className="mb-16 lg:mb-10">
                <img src={items.image} className="w-24 mx-auto" />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-slate-100 border border-slate-300 p-0.5 px-3 rounded-l-md"
                  onClick={() => handleDecrement(items.id)}
                >
                  -
                </button>
                <button className=" border border-slate-300 p-0.5 px-3">
                  {quantity[items.id] || 1}
                </button>
                <button
                  className="bg-slate-100 border border-slate-300 p-0.5 px-3 rounded-r-md"
                  onClick={() => handleincrement(items.id)}
                >
                  +
                </button>
              </div>
            </div>

            <div className=" w-[60%] lg:w-[70%]">
              <p className=" font-semibold text-[17px]">{items.title}</p>
              <p className="bg-[#ea580c] text-white font-semibold w-[40%] px-2 my-1 p-0.5 md:w-[23%] lg:w-[18%]">
                Best Seller
              </p>
              <div className="flex items-center my-1">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p className="font-bold text-[25px] mx-1"> {items.price}</p>
              </div>
              <p className="text-gray-600 my-1">Eligible for FREE Shipping</p>
              <p className="text-[#16a34a] my-1">In stock</p>
              <p className="text-blue-600 my-1">10 days Return & Exchange</p>
              <div>
                <button
                  className="my-1 text-black p-1 px-3 rounded-md border border-slate-300"
                  onClick={() => handleremove(items.id)}
                >
                  Delete
                </button>

                <button
                  className="border border-slate-300 mx-2 my-1 text-black p-1 px-3 rounded-md"
                  onClick={() => handleremove(items.id)}
                >
                  Save for later
                </button>

                <button
                  className=" border border-slate-300 my-1 text-black p-1 px-3 rounded-md"
                  onClick={() => handleremove(items.id)}
                >
                  See more like this
                </button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <div>
        <p className="bg-slate-800 text-white text-end text-[20px] font-semibold p-3">
          Subtotal: {calculateTotal()}
        </p>
      </div>
    </div>
  );
};

export default Cart;

{
  /* <p>Sum: {calculateSum(items)}</p> */
}
{
  /* <p>Quantity: {quantity[items.id] || 0}</p> */
}
