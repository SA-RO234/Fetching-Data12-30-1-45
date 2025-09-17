import axios from 'axios'
import { CircleX } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import Backicon from "../assets/back.json";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const Cartpage = () => {
const [Allcart , setCart ] = useState(JSON.parse(localStorage.getItem("MyCart")) || []) ;
const [Total , setTotal] = useState(0.0);
const [qty , setQty ] = useState();
const [totalPayment , setTotalpayment ] = useState();

     useEffect(()=> {
         setCart(JSON.parse(localStorage.getItem("MyCart")) || []);
         setTotal(CalculatorTotalPrice(Allcart));
         setQty(TotalQuantity(Allcart));
         setTotalpayment(TotalPayement(Allcart));
     },[]);

    const UpdateQtyIncrease = (id) =>{
    Allcart.find((item) => { 
      if(item.id == id){
        item.qty += 1;
        localStorage.setItem("MyCart" , JSON.stringify(Allcart));
        setCart(JSON.parse(localStorage.getItem("MyCart")));
        setTotal(CalculatorTotalPrice(Allcart));
        setQty(TotalQuantity(Allcart));
      }
    });
}

//  Update Discrease 
  const UpdateDiscrease = (id) =>{
     Allcart.find((item)=>{
       if(item.id == id ){
           if(item.qty == 1){
                 item.qty = 1;
           }else{
             item.qty-=1;
           localStorage.setItem("MyCart" , JSON.stringify(Allcart));
        setCart(JSON.parse(localStorage.getItem("MyCart")));
        setTotal(CalculatorTotalPrice(Allcart));
        setQty(TotalQuantity(Allcart));
           }
       }
     })
  }

  //  Cancel Product
  function CancelProduct (cart,id){
   const updatecart = cart.filter((item) => item.id != id);
    localStorage.setItem("MyCart" , JSON.stringify(updatecart));
        setCart(updatecart);
        setTotal(CalculatorTotalPrice(updatecart));
        setQty(TotalQuantity(updatecart));
        setTotalpayment(TotalPayement(updatecart))
     toast.success("You has Cancel a Product ! ");
}

  return (
    <div className='w-[85%] select-none relative mx-auto py-[150px]' >
        <Link to={"/"} className='absolute top-10 cursor-pointer left-[-80px]' > 
           <Lottie className='w-[200px] ' animationData={Backicon}  />
        </Link>
      <h1 className='text-[50px] font-bold text-black'>Product Shoping </h1>
      <div className="cart-container w-full flex ">
          <div  className='w-[70%] flex flex-col gap-5'>
             {
               Allcart.map(item => (
                  <div key={item.id} className="product-cart relative bg-gray-200 rounded-2xl px-5 py-2 flex gap-4 items-center w-[90%] h-[100px]">
                  <img src={item.image} className='w-[100px] object-cover object-top h-full' alt="" />
                   <h1 className='text-md font-regular w-[40%]'>{item.title}</h1>
                  <h2 className="price text-red-700  w-[20%] text-2xl font-bold">$ {item.price}</h2>
                  <div className="qty flex items-center gap-3 ">
                      <button onClick={()=> UpdateQtyIncrease(item.id)} className='bg-gray-500 p-0 rounded-full px-2 text-white text-xl'>+</button>
                      <span>{item.qty}</span>
                      <button onClick={()=> UpdateDiscrease(item.id) }  className='bg-gray-500  rounded-full px-[10px] cursor-pointer py-0 text-white text-xl' >-</button>
                  </div>
                  <button onClick={()=> CancelProduct(Allcart,item.id)} type="button" className='cursor-pointer absolute  top-[-3px] right-[-3px]' ><CircleX className='text-red-700 text-[50px] ' /></button>
              </div>
               ))
             }
          </div>
          <div className='w-[30%] flex flex-col   border-l-3 border-black pl-5 '>
              <h1 className='text-[2em] font-bold '>Shoping Detail :</h1>
              <p className='text-[1.5em] font-extralight'>Total : $<span>{Total}</span></p>
              <p className='text-[1.5em] font-extralight' >Tax :$<span>0.50</span></p>
              <p className='text-[1.5em] font-extralight pb-10' >Qutility: <span>{qty}</span></p> 
              <h1 className='text-[1.7em] font-bold bg-blue-500 rounded-3xl px-5 py-3 opacity-95' >Total Payment : $<span>{totalPayment}</span></h1>
          </div>
      </div>
    </div>
  )
}
export default Cartpage;

function CalculatorTotalPrice(cart){
      let total = cart.reduce((acc , item) => acc + item.price * item.qty , 0);
      return total.toFixed(2);
}
function TotalQuantity(cart){
    let qty = cart.reduce((acc, item) => acc + item.qty , 0);
    return qty;
}
 
function TotalPayement(cart){
    var totalpay=  cart.reduce((acc , item) => acc + item.price * item.qty + 0.50 , 0);
    return totalpay;
}


