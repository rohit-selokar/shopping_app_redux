import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/Cartslice";

const Cart = () => {

  const cartitems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const[quantity,setQuantity]=useState({}
    // Object.fromEntries(cartitems.map((item) => [item.id, 1]))
  );

  const handleremove = (id) => {
    dispatch(remove(id));

    setQuantity((preQuantity)=>{
      const updatedQuantity = {...preQuantity};
      delete updatedQuantity[id];
      return updatedQuantity;
    });
  };

  const handleincrement =(id)=>{
    setQuantity((preQuantity)=>({
      ...preQuantity,
      [id]:(preQuantity[id]||0)+1,
    }));
  }

  const handleDecrement = (id) =>{
    setQuantity((preQuantity)=>({
      ...preQuantity,
      [id]: Math.max((preQuantity[id]||0)-1,0),
    }));
  }

  const calculateSum = (items) =>{
    return (items.price * (quantity[items.id] || 1)).toFixed(2);
  };

  const calculateTotal = () =>{
    return cartitems.reduce((total,items)=>{
      return total + parseFloat(calculateSum(items));
    },0).toFixed(2);
  };


  return (
    <div className="my-3">
      {cartitems.map((items) => (
        <div className="border mx-5 shadow-md my-4 py-2 lg:flex">
          <img src={items.image} className="w-40 mx-auto" />
          {/* <p>Quantity: {quantity[items.id] || 0}</p> */}
          <div>
            <button
              className="bg-slate-800 text-white p-1 px-3 rounded-md mx-1"
              onClick={() => handleDecrement(items.id)}
            >
              -
            </button>
            {quantity[items.id] || 1}
            <button
              className="bg-slate-800 text-white p-1 px-3 rounded-md mx-1"
              onClick={() => handleincrement(items.id)}
            >
              +
            </button>
          </div>
          
          <p>Sum: {calculateSum(items)}</p>
          
          <div className="text-center mx-10 my-5 border">
            <p className="my-2">{items.title}</p>
            <p className="font-bold">Rs {items.price}</p>
            <p className="my-2">{items.description}</p>
            <button
              className="text-white bg-slate-800 p-1 px-3 rounded-md"
              onClick={() => handleremove(items.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div>
        <p className="bg-slate-800 text-white text-end text-[20px] font-semibold p-3">Grand Total: {calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Cart;
