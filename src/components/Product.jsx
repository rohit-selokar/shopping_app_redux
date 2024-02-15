import React, { useEffect, useState } from "react";
import {add} from '../redux/Cartslice'
import {useDispatch } from "react-redux";


const Product = () => {

    const[data,setData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((result) => {
            return result.json();
        })
        .then((response) => {
            setData(response);
        })
        .catch((err) => {
            console.log("error", err);
        });
    },[]);

    const handleadd = (product)=>{
        dispatch(add(product));
    }

    // jjjkk

  return(        
        <div className="grid grid-cols-2 mx-2 p-3 gap-5 md:mx-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
            data.map((product)=>{
                return(
                    <div key={product.id} className="text-center shadow-md ">
                        <img src={product.image} className="w-24 m-3 mx-auto"/>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.category}</p>
                        <button className="bg-slate-700 text-white p-1 px-3 my-3 rounded-md" onClick={()=>handleadd(product)}>Add to cart</button>
                </div>
                )
            })
        }
        </div>
  )
};

export default Product;
